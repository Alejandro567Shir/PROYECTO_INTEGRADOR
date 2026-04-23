import Sidebar from "../components/Sidebar";


function SecretariaDashboard({ usuario, onCerrarSesion }) {
  return (
    <section className="panel">
      <Sidebar
        nombre={usuario.nombre}
        rolTexto="SECRETARIA"
        onCerrarSesion={onCerrarSesion}
      />

      <main className="content">
        <div className="secretaria-header">
          <h1>Tablero de Procesos - Secretaría</h1>
          <button className="notificar-btn">Notificar Atrasos Manualmente</button>
        </div>

        <div className="cards-grid">
          <div className="mini-card">
            <p>Total Activos</p>
            <h2 className="azul-num">4</h2>
          </div>

          <div className="mini-card">
            <p>En Fase 1</p>
            <h2 className="naranja-num">1</h2>
          </div>

          <div className="mini-card">
            <p>Esperando Central</p>
            <h2 className="morado-num">0</h2>
          </div>

          <div className="mini-card">
            <p>Finalizados</p>
            <h2 className="verde-num">0</h2>
          </div>
        </div>

        <div className="card">
          <table>
            <thead>
              <tr>
                <th>Estudiante</th>
                <th>Tema / Proyecto</th>
                <th>Estado Actual</th>
                <th>Acción Administrativa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Juan Pérez</td>
                <td>Sistema Web IA para la Amazonía</td>
                <td>
                  <span className="estado-badge">Borrador</span>
                </td>
                <td>En proceso académico</td>
              </tr>

              <tr>
                <td>María Gómez</td>
                <td>Redes IoT para Agricultura</td>
                <td>
                  <span className="estado-badge azul">En Revisión F1</span>
                </td>
                <td>En proceso académico</td>
              </tr>

              <tr>
                <td>Carlos López</td>
                <td>App Móvil de Turismo</td>
                <td>
                  <span className="estado-badge morado-suave">En Revisión F2</span>
                </td>
                <td>En proceso académico</td>
              </tr>

              <tr>
                <td>Ana Ruiz</td>
                <td>Migración a IPv6</td>
                <td>
                  <span className="estado-badge lila">Validación Local</span>
                </td>
                <td>
                  <button className="armar-btn">Armar Carpeta y Enviar a Riobamba</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </section>
  );
}

export default SecretariaDashboard;