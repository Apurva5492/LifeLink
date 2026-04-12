const express = require('express');
const router = express.Router();
const pool = require('../db');

// POST /api/donors — Register a new donor
router.post('/', async (req, res) => {
  const { fullname, bloodGroup, organ, city, phone, email } = req.body;

  if (!fullname || !bloodGroup || !city || !phone || !email) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO donors (fullname, blood_group, organ, city, phone, email)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
      [fullname, bloodGroup, organ || null, city, phone, email]
    );
    res.status(201).json({ message: 'Donor registered successfully.', id: result.rows[0].id });
  } catch (err) {
    if (err.code === '23505') {
      return res.status(409).json({ error: 'Email already registered.' });
    }
    console.error(err);
    res.status(500).json({ error: 'Server error.' });
  }
});

// GET /api/donors?bloodGroup=A+&city=Delhi&organ=Kidney — Search donors
router.get('/', async (req, res) => {
  const { bloodGroup, city, organ } = req.query;

  const conditions = [];
  const values = [];

  if (bloodGroup) {
    values.push(bloodGroup);
    conditions.push(`blood_group = $${values.length}`);
  }
  if (city) {
    values.push(`%${city}%`);
    conditions.push(`LOWER(city) LIKE LOWER($${values.length})`);
  }
  if (organ) {
    values.push(organ);
    conditions.push(`organ = $${values.length}`);
  }

  const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';

  try {
    const result = await pool.query(
      `SELECT id, fullname, blood_group, organ, city FROM donors ${where} ORDER BY created_at DESC`,
      values
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error.' });
  }
});

module.exports = router;
