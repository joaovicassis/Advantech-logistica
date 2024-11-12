import React, { useState, useEffect } from 'react';
import { Package, AlertTriangle, Clock } from 'lucide-react';
import Sidebar from './components/Sidebar';
import StatsCard from './components/StatsCard';
import OrdersTable from './components/OrdersTable';

function App() {
  const [stats, setStats] = useState({
    delivered: 15,
    late: 3,
    alert: 2,
  });

  const [filterStatus, setFilterStatus] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setStats({
        delivered: 15,
        late: 3,
        alert: 2,
      });
    };
    fetchData();
  }, []);

  const handleFilterClick = (status: string) => {
    // Verifica se o status já está selecionado; se sim, remove o filtro ao definir como null
    setFilterStatus((prevStatus) => (prevStatus === status ? null : status));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <div className="ml-64 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Relatório de Pedidos</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Pedidos Entregues"
            value={stats.delivered}
            icon={Package}
            color="border-l-4 border-green-500"
            onClick={() => handleFilterClick('Entregue')}
          />
          <StatsCard
            title="Pedidos em Atraso"
            value={stats.late}
            icon={Clock}
            color="border-l-4 border-red-500"
            onClick={() => handleFilterClick('Em atraso')}
          />
          <StatsCard
            title="Pedidos em Alerta"
            value={stats.alert}
            icon={AlertTriangle}
            color="border-l-4 border-yellow-500"
            onClick={() => handleFilterClick('Em alerta')}
          />
        </div>
        <OrdersTable filterStatus={filterStatus} />
      </div>
    </div>
  );
}

export default App;
