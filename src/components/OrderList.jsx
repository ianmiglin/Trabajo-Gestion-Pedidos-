import PropTypes from 'prop-types'
import OrderItem from './OrderItem.jsx'

export default function OrderList({ orders }) {
  if (!orders.length) {
    return (
      <div className="text-sm text-gray-600 border rounded p-4 bg-white">No hay pedidos para mostrar.</div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  )
}

OrderList.propTypes = {
  orders: PropTypes.array.isRequired,
}


