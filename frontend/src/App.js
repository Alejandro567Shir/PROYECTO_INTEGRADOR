import { useState } from "react";
import Login from "./pages/Login";
import EstudianteDashboard from "./pages/EstudianteDashboard";
import DocenteDashboard from "./pages/DocenteDashboard";
import DirectorDashboard from "./pages/DirectorDashboard";
import SecretariaDashboard from "./pages/SecretariaDashboard";
import CoordinadorDashboard from "./pages/CoordinadorDashboard";
import "./App.css";

function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);

  const cerrarSesion = () => {
    setUsuarioLogueado(null);
  };

  if (!usuarioLogueado) {
    return <Login onLoginExitoso={setUsuarioLogueado} />;
  }

  if (usuarioLogueado.rol === "ALUMNO") {
    return (
      <EstudianteDashboard
        usuario={usuarioLogueado}
        onCerrarSesion={cerrarSesion}
      />
    );
  }

  if (usuarioLogueado.rol === "DOCENTE") {
    return (
      <DocenteDashboard
        usuario={usuarioLogueado}
        onCerrarSesion={cerrarSesion}
      />
    );
  }

  if (usuarioLogueado.rol === "DIRECTOR_TITULACION") {
    return (
      <DirectorDashboard
        usuario={usuarioLogueado}
        onCerrarSesion={cerrarSesion}
      />
    );
  }

  if (usuarioLogueado.rol === "SECRETARIA") {
    return (
      <SecretariaDashboard
        usuario={usuarioLogueado}
        onCerrarSesion={cerrarSesion}
      />
    );
  }

  if (usuarioLogueado.rol === "COORDINADOR_CARRERA") {
    return (
      <CoordinadorDashboard
        usuario={usuarioLogueado}
        onCerrarSesion={cerrarSesion}
      />
    );
  }

  return <Login onLoginExitoso={setUsuarioLogueado} />;
}

export default App;