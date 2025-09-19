import PropTypes from 'prop-types'
import { createOrderWithDefaults, validateOrder } from '../utils/orders.js'

export default function NewOrderForm({ onAdd }) {
  const [customer, setCustomer] = useState('')
  const [status, setStatus] = useState('pending')
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10))
  const [products, setProducts] = useState([{ name: '', quantity: 1, price: 0 }])
  const [errors, setErrors] = useState([])

  function handleAddProduct() {
    setProducts((prev) => [...prev, { name: '', quantity: 1, price: 0 }])
  }

  function handleRemoveProduct(index) {
    setProducts((prev) => prev.filter((_, i) => i !== index))
  }

  function handleChangeProduct(index, field, value) {
    setProducts((prev) => prev.map((p, i) => i === index ? { ...p, [field]: value } : p))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setErrors([])
    const draft = {
      customer,
      status,
      date,
      products: products.map((p) => ({
        name: p.name.trim(),
        quantity: Number(p.quantity),
        price: Number(p.price),
      })),
    }
    const order = createOrderWithDefaults(draft)
    const validation = validateOrder(order)
    if (!validation.valid) {
      setErrors(validation.errors)
      return
    }
    onAdd(order)
    // reset
    setCustomer('')
    setStatus('pending')
    setDate(new Date().toISOString().slice(0, 10))
    setProducts([{ name: '', quantity: 1, price: 0 }])
  }

  return (
    <form onSubmit={handleSubmit} className="border rounded-xl p-5 bg-white shadow-sm space-y-4 card-surface">
      <h3 className="text-lg font-semibold tracking-tight">Nuevo Pedido</h3>
      {errors.length > 0 && (
        <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
          <ul className="list-disc ml-5">
            {errors.map((err, idx) => (<li key={idx}>{err}</li>))}
          </ul>
        </div>
      )}
      <div className="grid md:grid-cols-3 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Cliente</label>
          <input className="border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200" value={customer} onChange={(e) => setCustomer(e.target.value)} placeholder="Nombre del cliente" />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Fecha</label>
          <input type="date" className="border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Estado</label>
          <select className="border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-700">Productos</p>
          <button type="button" onClick={handleAddProduct} className="text-sm px-3 py-2 border rounded-lg bg-gray-50 hover:bg-gray-100 shadow-sm secondary">Agregar producto</button>
        </div>
        <div className="space-y-2">
          {products.map((p, idx) => (
            <div key={idx} className="grid md:grid-cols-12 gap-2">
              <input className="md:col-span-6 border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Nombre" value={p.name} onChange={(e) => handleChangeProduct(idx, 'name', e.target.value)} />
              <input type="number" min="1" className="md:col-span-2 border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Cantidad" value={p.quantity} onChange={(e) => handleChangeProduct(idx, 'quantity', e.target.value)} />
              <input type="number" min="0" step="0.01" className="md:col-span-3 border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Precio" value={p.price} onChange={(e) => handleChangeProduct(idx, 'price', e.target.value)} />
              <button type="button" onClick={() => handleRemoveProduct(idx)} className="md:col-span-1 text-sm px-3 py-2 border rounded-lg bg-red-50 hover:bg-red-100 shadow-sm">Quitar</button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button type="submit" className="px-4 py-2.5 border rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-sm">Agregar Pedido</button>
      </div>
    </form>
  )
}

import { useState } from 'react'

NewOrderForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
}


