function ocultarTodo() {
  document.getElementById("selector-rol-page").style.display = "none";
  document.getElementById("login-page").style.display = "none";
  document.getElementById("panel-estudiante").style.display = "none";
  document.getElementById("panel-docente").style.display = "none";
  document.getElementById("panel-director").style.display = "none";
  document.getElementById("panel-secretaria").style.display = "none";
  document.getElementById("panel-coordinador").style.display = "none";
}

function abrirLoginRol(rol, titulo) {
  ocultarTodo();
  document.getElementById("login-page").style.display = "flex";
  document.getElementById("titulo-login").textContent = "Iniciar Sesión - " + titulo;
  document.getElementById("rol-seleccionado").value = rol;
  document.getElementById("mensaje-login").textContent = "";
  document.getElementById("login-form").reset();
  document.getElementById("rol-seleccionado").value = rol;
}

function volver() {
  ocultarTodo();
  document.getElementById("selector-rol-page").style.display = "flex";
  document.getElementById("mensaje-login").textContent = "";
  document.getElementById("login-form").reset();
}

function cerrarSesion() {
  volver();
}

function mostrarPanel(usuario) {
  ocultarTodo();

  if (usuario.rol === "ALUMNO") {
    document.getElementById("panel-estudiante").style.display = "flex";
    document.getElementById("nombre-estudiante").textContent = usuario.nombre;
  }

  if (usuario.rol === "DOCENTE") {
    document.getElementById("panel-docente").style.display = "flex";
    document.getElementById("nombre-docente").textContent = usuario.nombre;
  }

  if (usuario.rol === "DIRECTOR_TITULACION") {
    document.getElementById("panel-director").style.display = "flex";
    document.getElementById("nombre-director").textContent = usuario.nombre;
  }

  if (usuario.rol === "SECRETARIA") {
    document.getElementById("panel-secretaria").style.display = "flex";
    document.getElementById("nombre-secretaria").textContent = usuario.nombre;
  }

  if (usuario.rol === "COORDINADOR_CARRERA") {
    document.getElementById("panel-coordinador").style.display = "flex";
    document.getElementById("nombre-coordinador").textContent = usuario.nombre;
  }
}

function revisarProyecto(idProyecto) {
  alert("Abrir detalle del proyecto: " + idProyecto);
}

function marcarActaEmitida(idProyecto) {
  alert("Acta emitida para el proyecto: " + idProyecto);
}

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const correo = document.getElementById("correo").value.trim();
  const clave = document.getElementById("clave").value.trim();
  const rol = document.getElementById("rol-seleccionado").value;

  const res = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ correo, clave, rol })
  });

  const data = await res.json();

  if (data.success) {
    mostrarPanel(data.usuario);
  } else {
    document.getElementById("mensaje-login").textContent = data.mensaje;
  }
});

document.getElementById("selector-rol-page").style.display = "flex";