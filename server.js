const express = require('express');
const cors = require('cors');
const { getCapa8Stats } = require('./controllers/incidentController');

const app = express();
app.use(cors());
app.use(express.json());

// Ruta modularizada
app.get('/api/stats/capa8', getCapa8Stats);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor Power CRM funcionando en el puerto ${PORT}`);
});