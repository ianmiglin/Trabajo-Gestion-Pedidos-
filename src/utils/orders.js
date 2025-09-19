// Domain: order defaults and validations

export function createOrderWithDefaults(draft) {
  const nowIso = new Date().toISOString()
  return {
    id: draft.id ?? cryptoRandomId(),
    customer: draft.customer ?? '',
    date: draft.date ?? nowIso,
    status: draft.status ?? 'pending',
    products: Array.isArray(draft.products) ? draft.products : [],
  }
}

export function validateOrder(order) {
  const errors = []
  if (!order.customer || order.customer.trim().length < 3) {
    errors.push('El nombre del cliente debe tener al menos 3 caracteres')
  }
  const invalidQuantity = order.products.some((p) => !(Number(p.quantity) > 0))
  if (invalidQuantity) {
    errors.push('Cada producto debe tener cantidad mayor a 0')
  }
  if (!order.status) {
    errors.push('El estado es requerido')
  }
  if (!order.date) {
    errors.push('La fecha es requerida')
  }
  return {
    valid: errors.length === 0,
    errors,
  }
}

export function filterOrdersByStatus(orders, status) {
  if (status === 'all') return orders
  return orders.filter((o) => o.status === status)
}

function cryptoRandomId() {
  // Fallback for environments without crypto.randomUUID
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return 'id-' + Math.random().toString(36).slice(2, 10)
}


