require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

connectDB();

const app = express();
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.options('*', cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
