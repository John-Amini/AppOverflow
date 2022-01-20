var express = require('express');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const db = require('../db/models');
const { csrfProtection, asyncHandler, userSignupValidators, loginValidators } = require('./utils');
const { loginUser, logoutUser, requireAuth } = require('../auth')

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

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      console.log(emailAddress)
      const user = await db.User.findOne({ where: { email: emailAddress } });
      console.log(user)
      if (user !== null) {
        console.log(user.hashed_password)
        const passwordMatch = await bcrypt.compare(password, user.hashed_password.toString());
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
    loginUser(req, res, user);
    res.redirect('/questions')
  }
  else {
    const err = validationErrors.array().map(item => item.msg)
    res.render('user-signup', { title: 'Sign Up', csrfToken: req.csrfToken(), user, err })
  }

}))

router.get('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/')
})

router.get('/:id', requireAuth, asyncHandler(async (req, res) => {
  const user = await db.User.findOne({
    where: { id: req.params.id },
    include: db.Question
  })
  if (user) {
    res.render('user-profile', { user })

  } else {
    res.redirect('/')
  }
}))

module.exports = router;
