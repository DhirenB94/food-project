const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const bcrypt = require('bcryptjs');

router.get('/login', async (req, res) => {
  res.render('auth/login');
});

router.post('/login', async (req, res) => {
  const {username, password} = req.body;

  if(username === '' || password === '') {
    res.render('auth/login', {
      errorMessage: 'Indicate username and password'
    })
    return;
  }

  const user = await User.findOne({ username: username });

  if(user === null) {
    res.render('auth/login', {
      errorMessage: 'Invalid username'
    })
    return;
  }

  if(bcrypt.compareSync(password, user.password)) {
    req.session.currentUser = user;

    res.redirect('/');
  }
  else {
    res.render('auth/login', {
      errorMessage: 'Password incorrect'
    })
    return;
  }
})

router.get('/signup', (req, res) => {
  res.render('auth/login');
});
