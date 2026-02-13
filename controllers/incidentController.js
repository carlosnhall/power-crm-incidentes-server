const incidentService = require('../services/incidentService');

const getCapa8Stats = async (req, res) => {
    try {
        const stats = await incidentService.getCapa8Stats();
        res.json(stats);
    } catch (err) {
        res.status(500).json({ error: 'Error en el servidor al procesar estadísticas' });
    }
};

module.exports = { getCapa8Stats };