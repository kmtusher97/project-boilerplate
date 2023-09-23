const bcrypt = require('bcrypt');

const User = require('../models/User');

const registerUser = async ({ username, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  await user.save();
};

const getUserByUsernameOrEmail = async ({ username, email }) =>
  await User.findOne({ $or: [{ username }, { email }] });

module.exports = {
  registerUser,
  getUserByUsernameOrEmail,
};
