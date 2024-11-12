import React from 'react';
import { ClipboardList, Package } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white p-4">
      <div className="mb-8">
        {}
        <div className="h-12 flex items-center justify-center bg-gray-800 rounded-lg mb-6">
          <Package className="h-8 w-8 text-blue-500" />
          <span className="ml-2 font-bold text-xl">Advantech</span>
        </div>
        
        {/* Navigation */}
        <nav>
          <a
            href="#"
            className="flex items-center space-x-3 p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <ClipboardList className="h-5 w-5" />
            <span className="font-medium">Relatório de Pedidos</span>
          </a>
        </nav>
      </div>
    </div>
  );
}