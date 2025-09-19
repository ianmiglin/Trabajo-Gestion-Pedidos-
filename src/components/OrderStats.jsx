import PropTypes from 'prop-types'

export default function OrderStats({ orders }) {
  const total = orders.length
  const counts = orders.reduce((acc, o) => {
    acc[o.status] = (acc[o.status] || 0) + 1
    return acc
  }, { pending: 0, shipped: 0, delivered: 0 })

  const Stat = ({ label, value, accent }) => (
    <div className={`border rounded-xl p-4 bg-white shadow-sm relative overflow-hidden`}>
      <span className={`absolute inset-y-0 left-0 w-1 ${accent}`} aria-hidden="true"></span>
      <p className="ml-2 text-xs text-gray-600">{label}</p>
      <p className="ml-2 text-2xl font-semibold tracking-tight">{value}</p>
    </div>
  )

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <Stat label="Total" value={total} accent="bg-slate-400" />
      <Stat label="Pending" value={counts.pending} accent="bg-yellow-400" />
      <Stat label="Shipped" value={counts.shipped} accent="bg-blue-400" />
      <Stat label="Delivered" value={counts.delivered} accent="bg-green-400" />
    </div>
  )
}

OrderStats.propTypes = {
  orders: PropTypes.array.isRequired,
}


