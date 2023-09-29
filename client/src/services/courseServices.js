import Axios from '../axios';

const getCourses = () => Axios.get('/courses').then((res) => res.data);

const upsertCourse = (payload) => Axios.pos

const courseServices = { getCourses };

export default courseServices;
