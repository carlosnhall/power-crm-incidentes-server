const { Pool } = require('pg');
require('dotenv').config();

// Usamos Pool para gestionar múltiples conexiones de forma eficiente
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Requerido para conectar con Neon desde Node.js
  }
});

// Verificación inicial de conexión
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ Error conectando a Neon:', err.stack);
  } else {
    console.log('✅ Conexión a Neon exitosa:', res.rows[0].now);
  }
});

module.exports = pool;