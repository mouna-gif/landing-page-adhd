import { ReactNode } from 'react';

interface PillarCardProps {
  number: string;
  title: string;
  description: string;
  color: string;
}

export function PillarCard({ number, title, description, color }: PillarCardProps) {
  return (
    <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
      <div 
        className="absolute top-0 left-0 w-full h-2 rounded-t-2xl"
        style={{ backgroundColor: color }}
      />
      <div 
        className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white"
        style={{ backgroundColor: color }}
      >
        <span className="text-xl">{number}</span>
      </div>
      <h3 className="mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
