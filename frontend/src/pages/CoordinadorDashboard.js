import Sidebar from "../components/Sidebar";


function CoordinadorDashboard({ usuario, onCerrarSesion }) {
  return (
    <section className="panel">
      <Sidebar
        nombre={usuario.nombre}
        rolTexto="COORDINADOR"
        onCerrarSesion={onCerrarSesion}
        onIrPanelPrincipal={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />

      <main className="content">
        <h1>Validación de Coordinación (Sede Orellana)</h1>
        <p className="coordinador-subtitle">
          Proyectos aprobados por F1 y F2 que requieren visto bueno antes del envío a Matriz.
        </p>

        <div className="coordinador-card-wrap">
          <div className="card coordinador-card">
            <strong>Ana Ruiz</strong>
            <p>Migración a IPv6</p>

            <div className="ultima-accion-box">
              <strong>Última acción:</strong>
              <span>Validado Fase 2</span>
            </div>

            <button className="sellar-btn">Sellar y Aprobar Documentación</button>
          </div>
        </div>
      </main>
    </section>
  );
}

export default CoordinadorDashboard;