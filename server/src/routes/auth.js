const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userServices = require('../services/userServices');

const authRoutes = express.Router();

const secretKey = process.env.SECRET_KEY;
const tokenDuration = process.env.TOKEN_DURATION;

authRoutes.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await userServices.getUserByUsernameOrEmail({ username });
  if (!user) {
    return res.status(401).json({ message: `No user exist with ${username}` });
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: 'Wrong password' });
  }

  const token = jwt.sign({ username }, secretKey, { expiresIn: tokenDuration });
  res.json({ token });
});

module.exports = authRoutes;
