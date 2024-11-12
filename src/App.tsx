import React from 'react';
import { Package, AlertTriangle, Clock } from 'lucide-react';
import Sidebar from './components/Sidebar';
import StatsCard from './components/StatsCard';
import OrdersTable from './components/OrdersTable';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      
      <div className="ml-64 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Relatório de Pedidos</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Pedidos Entregues"
            value={1}
            icon={Package}
            color="border-l-4 border-green-500"
          />
          <StatsCard
            title="Pedidos em Atraso"
            value={1}
            icon={Clock}
            color="border-l-4 border-red-500"
          />
          <StatsCard
            title="Pedidos em Alerta"
            value={1}
            icon={AlertTriangle}
            color="border-l-4 border-yellow-500"
          />
        </div>
        
        {/* Orders Table */}
        <OrdersTable />
      </div>
    </div>
  );
}

export default App;