import Sidebar from "../components/Sidebar";
import "../App.css";

function DirectorDashboard({ usuario, onCerrarSesion }) {
  return (
    <section className="panel">
      <Sidebar
        nombre={usuario.nombre}
        rolTexto="DIRECTOR F2"
        onCerrarSesion={onCerrarSesion}
      />

      <main className="content">
        <h1>Panel Director Titulación - Fase 2</h1>

        <div className="director-grid">
          <div className="card director-card">
            <h3>PENDIENTES DE RÚBRICA</h3>

            <div className="mini-proyecto-card">
              <strong>Carlos López</strong>
              <p>App Móvil de Turismo</p>
            </div>
          </div>

          <div className="card director-card centro-vacio">
            <p>Seleccione un proyecto de la lista</p>
          </div>
        </div>
      </main>
    </section>
  );
}

export default DirectorDashboard;