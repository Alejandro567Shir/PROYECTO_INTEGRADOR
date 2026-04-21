const express = require("express");
const path = require("path");
const db = require("./db");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/api/procesos", (req, res) => {
  const sql = "SELECT estudiante, estado, fecha_registro FROM procesos ORDER BY id DESC";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error en consulta SQL:", err);
      return res.status(500).json({ error: "Error en la base de datos" });
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});