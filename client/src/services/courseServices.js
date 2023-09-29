import Axios from '../axios';

const createCourse = (payload) => Axios.post('/courses', payload);

const getCourses = () => Axios.get('/courses').then((res) => res.data);

const courseServices = { createCourse, getCourses };

export default courseServices;
