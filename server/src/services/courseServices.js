const Course = require('../models/Course');

const createCourse = async (courseData) => {
  const course = new Course(courseData);
  await course.save();
  return course;
};

const getAllCourses = async () => await Course.find();

const getCourseById = async (courseId) => await Course.findById(courseId);

const updateCourse = async (courseId, updateData) => {
  const course = await Course.findByIdAndUpdate(courseId, updateData, {
    new: true,
  });
  return course;
};

const deleteCourse = async (courseId) =>
  await Course.findByIdAndRemove(courseId);

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};
