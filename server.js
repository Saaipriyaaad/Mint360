const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Connect to DB
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // body parser

// Routes
app.use('/api', require('./routes/userRoutes'));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//commit