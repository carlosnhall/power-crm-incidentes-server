const db = require('../config/db');

const getCapa8Stats = async () => {
    const query = `
      SELECT 
        producto AS modulo, 
        subcategoria AS falla, 
        COUNT(*) AS total 
      FROM incidentes_individuales 
      WHERE categoria_raiz = 'Desconocimiento de Usuario'
      GROUP BY producto, subcategoria 
      ORDER BY total DESC;
    `;
    const result = await db.query(query);
    return result.rows;
};

module.exports = { getCapa8Stats };