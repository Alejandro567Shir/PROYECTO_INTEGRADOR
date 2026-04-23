import Sidebar from "../components/Sidebar";


function EstudianteDashboard({ usuario, onCerrarSesion }) {
  return (
    <section className="panel">
      <Sidebar
        nombre={usuario.nombre}
        rolTexto="ESTUDIANTE"
        onCerrarSesion={onCerrarSesion}
      />

      <main className="content">
        <h1>Mi Proceso de Titulación</h1>

        <div className="card">
          <div className="dashboard-header-row">
            <div>
              <h2>Sistema Web IA para la Amazonía</h2>
              <p>ID: p1</p>
            </div>
            <span className="estado-badge">Borrador</span>
          </div>

          <hr className="separador" />

          <h3>Archivos Subidos</h3>
          <p>No hay archivos subidos aún.</p>

          <div className="acciones-box">
            <h3>Acciones Requeridas</h3>
            <div className="acciones-row">
              <input
                type="text"
                placeholder="Nombre del documento"
                className="input-doc"
              />
              <button className="subir-btn">Subir</button>
              <button className="fase-btn">Enviar a Fase 1</button>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Observaciones de Docentes</h3>
          <p>No hay observaciones registradas.</p>
        </div>
      </main>
    </section>
  );
}

export default EstudianteDashboard;