import Axios from '../axios';

const registerUser = async ({ username, email, password }) =>
  await Axios.post('/register', { username, email, password });

const userServices = { registerUser };

export default userServices;
