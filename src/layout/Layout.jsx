export default function Layout({ children, tabs }) {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="brand-icon">MA</div>
          <div className="brand-name">MailAméricas</div>
        </div>
        <nav className="sidebar-nav">
          <a className="nav-item active" href="#">Dashboard</a>
          <a className="nav-item" href="#">Pedidos</a>
          <a className="nav-item" href="#">Clientes</a>
          <a className="nav-item" href="#">Estadísticas</a>
          <a className="nav-item" href="#">Reportes</a>
          <a className="nav-item" href="#">Parámetros</a>
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
            <button className="btn secondary">Sincronizar</button>
            <button className="btn secondary">Exportar</button>
            <button className="btn secondary">Importar</button>
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

