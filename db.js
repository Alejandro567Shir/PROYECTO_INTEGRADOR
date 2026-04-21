const sql = require("mssql");

const config = {
  user: "sa",
  password: "sql",
  server: "localhost",
  database: "SGT_ESPOCH",
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

async function getConnection() {
  try {
    const pool = await sql.connect(config);
    return pool;
  } catch (error) {
    console.error("Error de conexión a SQL Server:", error);
    throw error;
  }
}

module.exports = {
  sql,
  getConnection
};