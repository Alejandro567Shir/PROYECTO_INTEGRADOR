import Sidebar from "../components/Sidebar";
import "../App.css";

function DocenteDashboard({ usuario, onCerrarSesion }) {
  return (
    <section className="panel">
      <Sidebar
        nombre={usuario.nombre}
        rolTexto="DOCENTE F1"
        onCerrarSesion={onCerrarSesion}
      />

      <main className="content">
        <h1>Panel Docente - Fase 1 (Perfil y Anteproyecto)</h1>

        <div className="card">
          <table>
            <thead>
              <tr>
                <th>Estudiante</th>
                <th>Tema</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  María Gómez
                  <br />
                  <small>u10</small>
                </td>
                <td>Redes IoT para Agricultura</td>
                <td>
                  <span className="estado-badge azul">En Revisión F1</span>
                </td>
                <td>
                  <button className="link-btn">Revisar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </section>
  );
}

export default DocenteDashboard;