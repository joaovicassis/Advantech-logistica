import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  color: string;
  onClick: () => void; // Adiciona a propriedade onClick aqui
}

export default function StatsCard({ title, value, icon: Icon, color, onClick }: StatsCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 ${color} cursor-pointer`} // cursor-pointer para indicar que é clicável
      onClick={onClick} // Chama onClick quando o card é clicado
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${color.replace('border-l-4', 'bg-opacity-10')}`}>
          <Icon className={`h-6 w-6 ${color.replace('border-l-4', 'text')}`} />
        </div>
      </div>
    </div>
  );
}
