function Sidebar({ nombre, rolTexto, onCerrarSesion }) {
  return (
    <aside className="sidebar">
      <div className="brand">SGT ESPOCH</div>

      <div className="user-box">
        <strong>{nombre}</strong>
        <span>{rolTexto}</span>
      </div>

      <button className="menu-btn">Mi Panel Principal</button>

      <button className="logout-btn" onClick={onCerrarSesion}>
        Cerrar Sesión
      </button>
    </aside>
  );
}

export default Sidebar;