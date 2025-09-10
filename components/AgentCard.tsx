import React from 'react';

interface AgentCardProps {
  title: string;
  description: string;
  imageSrc: string;
  onClick?: () => void;
}

export function AgentCard({ title, description, imageSrc, onClick }: AgentCardProps) {
  return (
    <div 
      className="rounded-[12px] w-full cursor-pointer transition-transform hover:scale-[1.02] hover:shadow-lg"
      onClick={onClick}
    >
      <div className="flex items-start justify-between w-full">
        <div className="w-[228px] space-y-1">
          <h3 className="text-white text-[16px] font-bold leading-[20px]">
            {title}
          </h3>
          <p className="text-[#91bfc9] text-[14px] font-normal leading-[21px]">
            {description}
          </p>
        </div>
        <div className="flex-1 ml-4">
          <div 
            className="bg-center bg-cover bg-no-repeat rounded-[12px] h-16 w-full min-w-0"
            style={{ backgroundImage: `url('${imageSrc}')` }}
          />
        </div>
      </div>
    </div>
  );
}

export default AgentCard;