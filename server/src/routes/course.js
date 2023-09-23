const express = require('express');

const authMiddleware = require('../middlewares/authMiddleware');
const courseServices = require('../services/courseServices');

const courseRoutes = express.Router();

courseRoutes.use(authMiddleware);

courseRoutes.post('/courses/:id/enroll', (req, res) => {
  res.json({ message: 'Enrolled in the course' });
});

courseRoutes.post('/courses', async (req, res) => {
  try {
    const course = await courseServices.createCourse(req.body);
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
});

courseRoutes.get('/courses', async (req, res) => {
  try {
    const courses = await courseServices.getAllCourses();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
});

courseRoutes.get('/courses/:id', async (req, res) => {
  const courseId = req.params.id;
  try {
    const course = await courseServices.getCourseById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
});

courseRoutes.put('/courses/:id', async (req, res) => {
  const courseId = req.params.id;
  try {
    const updatedCourse = await courseServices.updateCourse(courseId, req.body);
    if (!updatedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
});

courseRoutes.delete('/courses/:id', async (req, res) => {
  const courseId = req.params.id;
  try {
    await courseServices.deleteCourse(courseId);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error?.message });
  }
});

module.exports = courseRoutes;
