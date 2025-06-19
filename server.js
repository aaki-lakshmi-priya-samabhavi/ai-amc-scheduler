const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const customerRoutes = require('./routes/customerRoutes.js');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/customers', customerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
