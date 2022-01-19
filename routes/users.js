var express = require('express');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const db = require('../db/models');
const { csrfProtection, asyncHandler, userSignupValidators, loginValidators } = require('./utils');


var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.get('/login', csrfProtection, (req, res) => {
  res.render('users-login', {
    title: 'Login',
    csrfToken: req.csrfToken()
  });
});


router.post('/login', csrfProtection, loginValidators,
  asyncHandler(async (req, res) => {
    const {
      emailAddress,
      password,
    } = req.body;
    console.log(req.body)
    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {

      const user = await db.User.findOne({ where: { email: emailAddress } });
      if (user !== null) {
        const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

        if (passwordMatch) {
          loginUser(req, res, user);
          return res.redirect('/');
        }
      }

      errors.push('Login failed for the provided email address and password');
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render('users-login', {
      title: 'Login',
      emailAddress,
      errors,
      csrfToken: req.csrfToken(),
    });
  }));


router.get('/signup', csrfProtection, asyncHandler(async (req, res) => {
  const newUser = await db.User.build()
  res.render('user-signup', { title: 'Sign Up', csrfToken: req.csrfToken(), newUser })
}));



router.post('/signup', userSignupValidators, csrfProtection, asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;
  const user = await db.User.build({
    username,
    email
  })

  const validationErrors = validationResult(req)
  if (validationErrors.isEmpty()) {
    const hashed = await bcrypt.hash(password, 10)
    user.hashed_password = hashed
    await user.save()
    res.redirect('/questions')
  }
  else {
    const err = validationErrors.array().map(item => item.msg)
    res.render('user-signup', { title: 'Sign Up', csrfToken: req.csrfToken(), user, err })
  }

}))

module.exports = router;
