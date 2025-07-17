const express = require('express');
const cors = require('cors'); // ✅ Move this after express
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const customerRoutes = require('./routes/customerRoutes.js');

dotenv.config();
connectDB();

const app = express();

// ✅ Apply CORS middleware AFTER app is defined
app.use(cors());

// ✅ Body parser for JSON
app.use(express.json());

// ✅ Routes
app.use('/api/customers', customerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
