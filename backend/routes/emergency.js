const express = require('express');
const router = express.Router();
const pool = require('../db');

// POST /api/emergency — Submit an emergency request
router.post('/', async (req, res) => {
  const { patient_name, blood_group, organ, city, contact, hospital } = req.body;

  if (!patient_name || !blood_group || !city || !contact) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO emergency_requests (patient_name, blood_group, organ, city, contact, hospital)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
      [patient_name, blood_group, organ || null, city, contact, hospital || null]
    );
    res.status(201).json({ message: 'Emergency request submitted.', id: result.rows[0].id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error.' });
  }
});

// GET /api/emergency — List active emergency requests
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, patient_name, blood_group, organ, city, hospital, created_at
       FROM emergency_requests WHERE status = 'active' ORDER BY created_at DESC`
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error.' });
  }
});

module.exports = router;
