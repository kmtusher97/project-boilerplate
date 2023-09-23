const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructors: [
    {
      type: String,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
