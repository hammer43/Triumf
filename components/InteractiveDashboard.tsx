import React, { useState } from 'react';
import StitchDesign from '../imports/StitchDesign';
import NavigationBar from './NavigationBar';
import { toast } from 'sonner@2.0.3';

// Mock data for different tabs
const mockData = {
  home: {
    stats: [
      { title: 'Scrap', value: '↓ 38%', change: '-38%', type: 'negative' },
      { title: 'Inspection Time', value: '↓ 42%', change: '-42%', type: 'negative' },
      { title: 'Data Volume', value: '↓ 93%', change: '-93%', type: 'negative' },
      { title: 'Cascade Loss Prevented', value: '€8k', change: '+8k', type: 'positive' },
    ]
  },
  data: {
    stats: [
      { title: 'Data Points', value: '2.3M', change: '+15%', type: 'positive' },
      { title: 'Processing Speed', value: '45ms', change: '-23%', type: 'negative' },
      { title: 'Storage Used', value: '67%', change: '+3%', type: 'positive' },
      { title: 'Quality Score', value: '99.3%', change: '+0.8%', type: 'positive' },
    ]
  },
  reports: {
    stats: [
      { title: 'Reports Generated', value: '142', change: '+27', type: 'positive' },
      { title: 'Time Saved', value: '142h', change: '+18h', type: 'positive' },
      { title: 'Accuracy', value: '98.7%', change: '+1.2%', type: 'positive' },
      { title: 'Alerts', value: '3', change: '-5', type: 'negative' },
    ]
  },
  settings: {
    stats: [
      { title: 'Active Agents', value: '6', change: '+1', type: 'positive' },
      { title: 'Uptime', value: '99.9%', change: '+0.1%', type: 'positive' },
      { title: 'Response Time', value: '12ms', change: '-3ms', type: 'negative' },
      { title: 'Memory Usage', value: '43%', change: '-7%', type: 'negative' },
    ]
  }
};

export default function InteractiveDashboard() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    toast(`Switched to ${tab.charAt(0).toUpperCase() + tab.slice(1)} view`);
  };

  return (
    <div className="bg-[#121f21] min-h-screen w-full">
      <div className="flex flex-col items-start justify-between min-h-screen overflow-clip relative w-full">
        {/* Main Dashboard Content */}
        <div className="w-full flex-1">
          <StitchDesign />
        </div>
        
        {/* Enhanced Navigation with state */}
        <div className="w-full">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center justify-start pb-3 pt-1 px-4 w-full">
              <div className="text-[#91bfc9] text-[14px] font-normal leading-[21px] text-center w-full">
                {activeTab === 'home' && '+27 patterns shared today | 142 hours saved'}
                {activeTab === 'data' && 'Processing 2.3M data points | 99.3% accuracy'}
                {activeTab === 'reports' && '142 reports generated | 18h additional time saved'}
                {activeTab === 'settings' && '6 active agents | 99.9% uptime maintained'}
              </div>
            </div>
          </div>
          
          <NavigationBar activeTab={activeTab} onTabChange={handleTabChange} />
        </div>
      </div>
    </div>
  );
}