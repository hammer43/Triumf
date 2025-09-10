import React from 'react';
import { imgVector1, imgVector2, imgVector3, imgVector4 } from '../imports/svg-ae4io';

interface NavItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

function NavItem({ icon, label, isActive = false, onClick }: NavItemProps) {
  return (
    <div 
      className="flex-1 cursor-pointer transition-colors hover:opacity-80"
      onClick={onClick}
    >
      <div className="flex flex-col gap-1 items-center justify-end">
        <div className="h-8 flex items-center justify-center">
          <div className="h-6 w-6 overflow-hidden">
            <img className="block max-w-none size-full" src={icon} alt={label} />
          </div>
        </div>
        <div className={`text-[12px] font-medium leading-[18px] ${
          isActive ? 'text-white' : 'text-[#91bfc9]'
        }`}>
          {label}
        </div>
      </div>
    </div>
  );
}

interface NavigationBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function NavigationBar({ activeTab, onTabChange }: NavigationBarProps) {
  const navItems = [
    { icon: imgVector1, label: 'Home', key: 'home' },
    { icon: imgVector2, label: 'Data', key: 'data' },
    { icon: imgVector3, label: 'Reports', key: 'reports' },
    { icon: imgVector4, label: 'Settings', key: 'settings' },
  ];

  return (
    <div className="bg-[#1a2e33] border-t border-[#244247] w-full">
      <div className="flex gap-2 items-start justify-start pb-3 pt-[9px] px-4">
        {navItems.map((item) => (
          <NavItem
            key={item.key}
            icon={item.icon}
            label={item.label}
            isActive={activeTab === item.key}
            onClick={() => onTabChange(item.key)}
          />
        ))}
      </div>
      <div className="bg-[#1a2e33] h-5 w-full" />
    </div>
  );
}