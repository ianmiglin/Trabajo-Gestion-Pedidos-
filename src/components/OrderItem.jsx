import PropTypes from 'prop-types'

export default function OrderItem({ order }) {
  const total = order.products.reduce((sum, p) => sum + p.quantity * p.price, 0)

  const statusColor = {
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    shipped: 'bg-blue-100 text-blue-800 border-blue-300',
    delivered: 'bg-green-100 text-green-800 border-green-300',
  }[order.status] || 'bg-gray-100 text-gray-800 border-gray-300'

  return (
    <div className="border rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition-shadow card-surface">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h3 className="text-base md:text-lg font-semibold tracking-tight">Pedido #{order.id}</h3>
          <p className="text-sm text-gray-600">Cliente: <span className="font-medium text-gray-900">{order.customer}</span></p>
          <p className="text-xs text-gray-500">Fecha: {new Date(order.date).toLocaleDateString()}</p>
        </div>
        <div className={`text-xs px-2 py-1 border rounded-full capitalize ${statusColor} badge ${order.status}`}>{order.status}</div>
      </div>

      <div className="mt-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Productos</p>
        <ul className="divide-y rounded-lg border overflow-hidden product-list">
          {order.products.map((p, idx) => (
            <li key={idx} className="flex items-center justify-between p-3 product-item">
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{p.name}</p>
                <p className="text-xs text-gray-600">Cantidad: {p.quantity}</p>
              </div>
              <div className="text-sm text-gray-900 font-medium">
                ${p.price.toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex items-center justify-end">
        <p className="text-sm font-semibold">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  )
}

OrderItem.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    customer: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]).isRequired,
    status: PropTypes.oneOf(['pending', 'shipped', 'delivered']).isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
}


