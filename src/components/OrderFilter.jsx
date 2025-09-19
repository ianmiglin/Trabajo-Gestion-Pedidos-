import PropTypes from 'prop-types'

export default function OrderFilter({ selected, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <label className="text-sm text-gray-100">Estado:</label>
      <select
        className="border rounded-lg px-3 py-2 text-sm bg-white/95 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="all">Todos</option>
        <option value="pending">Pending</option>
        <option value="shipped">Shipped</option>
        <option value="delivered">Delivered</option>
      </select>
    </div>
  )
}

OrderFilter.propTypes = {
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}


