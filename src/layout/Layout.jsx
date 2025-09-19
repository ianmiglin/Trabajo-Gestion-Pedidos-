export default function Layout({ children, tabs }) {
  function scrollToId(id) {
    const el = document.getElementById(id)
    if (!el) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="brand-icon">MA</div>
          <div className="brand-name">MailAméricas</div>
        </div>
        <nav className="sidebar-nav">
          <button className="nav-item active" onClick={() => scrollToId('top')}>
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9,22 9,12 15,12 15,22"/>
            </svg>
            Dashboard
          </button>
          <button className="nav-item" onClick={() => scrollToId('orders')}>
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
            </svg>
            Pedidos
          </button>
          <button className="nav-item" onClick={() => scrollToId('new-order')}>
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            Clientes
          </button>
          <button className="nav-item" onClick={() => scrollToId('stats')}>
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="20" x2="18" y2="10"/>
              <line x1="12" y1="20" x2="12" y2="4"/>
              <line x1="6" y1="20" x2="6" y2="14"/>
            </svg>
            Estadísticas
          </button>
          <button className="nav-item" onClick={() => scrollToId('orders')}>
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            Reportes
          </button>
          <button className="nav-item" onClick={() => scrollToId('top')}>
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            Parámetros
          </button>
        </nav>
        <div className="sidebar-footer">
          <div className="user-avatar">AD</div>
          <div className="user-meta">
            <div className="user-name">Administrador</div>
            <div className="user-email">admin@mailamericas.com</div>
          </div>
        </div>
      </aside>
      <div className="content">
        <header className="topbar">
          <div>
            <h1 className="page-title">Gestión de Pedidos</h1>
            <p className="page-subtitle">Bienvenido • Panel principal</p>
          </div>
          <div className="topbar-actions">
            <button className="btn secondary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Subir</button>
            <button className="btn secondary" onClick={() => scrollToId('orders')}>Ir a Pedidos</button>
            <button className="btn secondary" onClick={() => scrollToId('new-order')}>Nuevo Pedido</button>
          </div>
        </header>
        {tabs && tabs.length > 0 && (
          <div className="tabs">
            {tabs.map((t, i) => (
              <button key={i} className={`tab ${i === 0 ? 'active' : ''}`}>{t}</button>
            ))}
          </div>
        )}
        <main className="page-body">
          {children}
        </main>
      </div>
    </div>
  )
}

