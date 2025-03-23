const mongoose = require('mongoose');
const DB_URI = process.env.MONGO_URI;
const DB_NAME = process.env.MONGO_DB_NAME;

async function connectMongoDB() {
  try {
    await mongoose.connect(DB_URI, {
      dbName: DB_NAME,
    });
    console.log('mongodb connection successful');
  } catch (error) {
    console.error('failed to connect to mongodb', error);
  }
}

module.exports = {
  connectMongoDB,
};
