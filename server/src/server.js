require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { connectMongoDB } = require('./db');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const courseRoutes = require('./routes/course');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

connectMongoDB();

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', courseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
