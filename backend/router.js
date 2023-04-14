const express = require('express');
const pool = require('./database');
const router = express.Router();
const cors = require('cors');

router.use(cors());

router.get('/api/data', async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM zipcodes');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

router.get('/api/year', async (req, res) => {
    const { year } = req.query.year;
    try {
        const [rows] = await pool.query('SELECT * FROM zipcodes WHERE year = ?', [year]);
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

module.exports = router;
