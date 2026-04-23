const pool = require("../config/db");

const login = async (req, res) => {
  try {
    const { correo, clave, rol } = req.body;

    const result = await pool.query(
      "SELECT id, nombre, correo, rol FROM usuarios WHERE correo = $1 AND clave = $2 AND rol = $3",
      [correo, clave, rol]
    );

    if (result.rows.length === 0) {
      return res.json({
        success: false,
        mensaje: "Datos incorrectos",
      });
    }

    res.json({
      success: true,
      usuario: result.rows[0],
    });
  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({
      success: false,
      mensaje: "Error en servidor",
    });
  }
};

module.exports = {
  login,
};