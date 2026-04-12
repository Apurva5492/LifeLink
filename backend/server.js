require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const donorRoutes = require('./routes/donors');
const emergencyRoutes = require('./routes/emergency');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;
const frontendDir = path.join(__dirname, '..');

app.use(cors());
app.use(express.json());
app.use(express.static(frontendDir));

app.use('/api/donors', donorRoutes);
app.use('/api/emergency', emergencyRoutes);
app.use('/api/auth', authRoutes);

app.get('/health', (_, res) => res.json({ status: 'ok' }));
app.get('/', (_, res) => res.sendFile(path.join(frontendDir, 'index.html')));

app.listen(PORT, () => console.log(`LifeLink backend running on http://localhost:${PORT}`));
