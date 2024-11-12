import React from 'react';

interface Order {
  id: string;
  nfeNumber: string;
  nfeKey: string;
  status: 'Entregue' | 'Em atraso' | 'Em alerta';
}

const orders: Order[] = [
  {
    id: "NFE001",
    nfeNumber: "123456789",
    nfeKey: "3522 0123 4567 8900 0123 5500 1000 0123 4567 8901 2345",
    status: "Entregue"
  },
  {
    id: "NFE002",
    nfeNumber: "987654321",
    nfeKey: "3522 0123 4567 8900 0123 5500 1000 0123 4567 8901 2346",
    status: "Em atraso"
  },
  {
    id: "NFE003",
    nfeNumber: "456789123",
    nfeKey: "3522 0123 4567 8900 0123 5500 1000 0123 4567 8901 2347",
    status: "Em alerta"
  },
];

export default function OrdersTable() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID NF-e
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Número NF-e
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Chave
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.nfeNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                  {order.nfeKey}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${order.status === 'Entregue' ? 'bg-green-100 text-green-800' : 
                      order.status === 'Em atraso' ? 'bg-red-100 text-red-800' : 
                      'bg-yellow-100 text-yellow-800'}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}