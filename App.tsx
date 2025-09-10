import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import InteractiveDashboard from './components/InteractiveDashboard';
import { Button } from './components/ui/button';
import { Download, Palette } from 'lucide-react';
import { toast, Toaster } from 'sonner@2.0.3';

export default function App() {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const exportToPNG = async () => {
    if (!dashboardRef.current) return;
    
    setIsExporting(true);
    setShowControls(false); // Hide controls during export
    toast('Generating PNG export...');
    
    try {
      // Wait a moment for UI to update
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const canvas = await html2canvas(dashboardRef.current, {
        backgroundColor: '#121f21',
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        width: dashboardRef.current.scrollWidth,
        height: dashboardRef.current.scrollHeight,
        onclone: (clonedDoc) => {
          // Fix any remaining oklch colors in the cloned document
          const clonedElement = clonedDoc.querySelector('[data-export-target]') || clonedDoc.body;
          if (clonedElement) {
            clonedElement.style.setProperty('--foreground', '#fcfcfc');
            clonedElement.style.setProperty('--background', '#121f21');
          }
        }
      });
      
      const link = document.createElement('a');
      link.download = `excelo-dashboard-${new Date().toISOString().split('T')[0]}.png`;
      link.href = canvas.toDataURL('image/png', 0.95);
      link.click();
      
      toast.success('Dashboard exported successfully!');
    } catch (error) {
      console.error('Export failed:', error);
      toast.error('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
      setShowControls(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#121f21] relative">
      {/* Export Controls - Only show when not exporting */}
      {showControls && (
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          <Button
            onClick={() => toast.info('This is a manufacturing analytics dashboard for Excelo - Excellence in Every Cut')}
            className="bg-[#244247] hover:bg-[#2a4a50] text-white shadow-lg"
            size="sm"
          >
            <Palette className="w-4 h-4" />
            <span className="ml-2 hidden sm:inline">Info</span>
          </Button>
          
          <Button
            onClick={exportToPNG}
            disabled={isExporting}
            className="bg-[#0ad954] hover:bg-[#09c44d] text-white shadow-lg"
            size="sm"
          >
            <Download className="w-4 h-4" />
            <span className="ml-2 hidden sm:inline">
              {isExporting ? 'Exporting...' : 'Export PNG'}
            </span>
          </Button>
        </div>
      )}

      {/* Dashboard Content */}
      <div ref={dashboardRef} className="w-full" data-export-target>
        <InteractiveDashboard />
      </div>

      {/* Toast Notifications */}
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#244247',
            color: 'white',
            border: '1px solid #2a4a50',
          },
        }}
      />
    </div>
  );
}