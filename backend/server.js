const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json({ extended: false }));

app.use('/api/users', require('./userRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
