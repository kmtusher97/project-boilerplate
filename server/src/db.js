const mongoose = require('mongoose');
const DB_URI = process.env.MONGO_URI;

async function connectMongoDB() {
  try {
    await mongoose.connect(DB_URI);
    console.log('mongodb connection successful');
  } catch (error) {
    console.error('failed to connect to mongodb', error);
  }
}

module.exports = {
  connectMongoDB,
};
