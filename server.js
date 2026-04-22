const express = require("express");
const path = require("path");
const pool = require("./db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// LOGIN
app.post("/login", async (req, res) => {
  try {
    const { correo, clave, rol } = req.body;

    const result = await pool.query(
      "SELECT id, nombre, correo, rol FROM usuarios WHERE correo = $1 AND clave = $2 AND rol = $3",
      [correo, clave, rol]
    );

    if (result.rows.length === 0) {
      return res.json({
        success: false,
        mensaje: "Datos incorrectos"
      });
    }

    res.json({
      success: true,
      usuario: result.rows[0]
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      mensaje: "Error en servidor"
    });
  }
});

app.listen(3001, () => {
  console.log("Servidor en http://localhost:3001");
});