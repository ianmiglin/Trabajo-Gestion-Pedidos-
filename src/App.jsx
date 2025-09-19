import { useEffect, useMemo, useState } from 'react'
import './App.css'
import OrderList from './components/OrderList.jsx'
import OrderFilter from './components/OrderFilter.jsx'
import OrderStats from './components/OrderStats.jsx'
import NewOrderForm from './components/NewOrderForm.jsx'
import { filterOrdersByStatus, createOrderWithDefaults } from './utils/orders.js'
import Layout from './layout/Layout.jsx'

function App() {
  const [orders, setOrders] = useState(() => initialOrders())
  const [statusFilter, setStatusFilter] = useState('all')

  useEffect(() => {
    // In a real app, could persist to localStorage
  }, [orders])

  const filtered = useMemo(() => filterOrdersByStatus(orders, statusFilter), [orders, statusFilter])

  function handleAddOrder(order) {
    setOrders((prev) => [createOrderWithDefaults(order), ...prev])
  }

  return (
    <Layout tabs={["Tablero", "Seguimiento", "Alertas", "Tareas"]}>
      <div className="space-y-6" id="top">
        <div className="flex items-center justify-between" id="stats">
          <div className="w-full md:w-auto">
            <OrderStats orders={orders} />
          </div>
          <div className="hidden md:block">
            <OrderFilter selected={statusFilter} onChange={setStatusFilter} />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6" id="new-order">
          <div className="lg:col-span-1">
            <NewOrderForm onAdd={handleAddOrder} />
          </div>
          <div className="lg:col-span-2 space-y-3" id="orders">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Pedidos</h2>
              <span className="text-xs text-gray-600">Mostrando {filtered.length} de {orders.length}</span>
            </div>
            <OrderList orders={filtered} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

function initialOrders() {
  return [
    {
      id: 'A-1001',
      customer: 'Juan Pérez',
      date: new Date().toISOString(),
      status: 'pending',
      products: [
        { name: 'Caja chica', quantity: 2, price: 10.5 },
        { name: 'Sobre acolchado', quantity: 5, price: 2.2 },
      ],
    },
    {
      id: 'A-1002',
      customer: 'María García',
      date: new Date(Date.now() - 86400000).toISOString(),
      status: 'shipped',
      products: [
        { name: 'Etiqueta termo', quantity: 3, price: 1.5 },
      ],
    },
    {
      id: 'A-1003',
      customer: 'Logística SRL',
      date: new Date(Date.now() - 2 * 86400000).toISOString(),
      status: 'delivered',
      products: [
        { name: 'Caja mediana', quantity: 1, price: 25 },
      ],
    },
  ]
}

export default App
