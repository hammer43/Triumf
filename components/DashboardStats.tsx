import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
}

export function StatCard({ title, value, change, changeType }: StatCardProps) {
  return (
    <div className="bg-[#244247] rounded-[12px] p-6 min-w-[158px] flex-1">
      <div className="space-y-2">
        <h3 className="text-white text-[16px] font-medium leading-[24px]">
          {title}
        </h3>
        <div className="text-white text-[24px] font-bold leading-[30px]">
          {value}
        </div>
        <div className={`text-[16px] font-medium leading-[24px] ${
          changeType === 'positive' ? 'text-[#0ad954]' : 'text-[#fa5e38]'
        }`}>
          {change}
        </div>
      </div>
    </div>
  );
}

export default function DashboardStats() {
  const stats = [
    {
      title: 'Scrap',
      value: '↓ 38%',
      change: '-38%',
      changeType: 'negative' as const,
    },
    {
      title: 'Inspection Time',
      value: '↓ 42%',
      change: '-42%',
      changeType: 'negative' as const,
    },
    {
      title: 'Data Volume',
      value: '↓ 93%',
      change: '-93%',
      changeType: 'negative' as const,
    },
    {
      title: 'Cascade Loss Prevented',
      value: '€8k',
      change: '+8k',
      changeType: 'positive' as const,
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}