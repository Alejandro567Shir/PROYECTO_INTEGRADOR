import "../App.css";

function Login() {
  return (
    <main className="login-page">
      <section className="login-card">
        <div className="logo-circle">
          <span className="logo-icon">📖</span>
        </div>

        <h1>SGT-ESPOCH Orellana</h1>
        <p className="subtitle">Sistema de Gestión de Titulación</p>

        <h2>Seleccione su rol</h2>

        <div className="role-list">
          <button className="role-item">
            <div className="role-info">
              <h3>ESTUDIANTE</h3>
              <p>Acceso para alumnos en proceso de titulación</p>
            </div>
            <span className="arrow">›</span>
          </button>

          <button className="role-item">
            <div className="role-info">
              <h3>DOCENTE</h3>
              <p>Revisión de Fase 1</p>
            </div>
            <span className="arrow">›</span>
          </button>

          <button className="role-item">
            <div className="role-info">
              <h3>DIRECTOR</h3>
              <p>Validación de Fase 2</p>
            </div>
            <span className="arrow">›</span>
          </button>

          <button className="role-item">
            <div className="role-info">
              <h3>SECRETARÍA</h3>
              <p>Gestión administrativa y seguimiento</p>
            </div>
            <span className="arrow">›</span>
          </button>

          <button className="role-item">
            <div className="role-info">
              <h3>COORDINADOR</h3>
              <p>Validación local de carrera</p>
            </div>
            <span className="arrow">›</span>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Login;