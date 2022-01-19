var express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');


var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/login', csrfProtection, (req, res) => {
  res.render('users-login', {
    title: 'Login',
    csrfToken: req.csrfToken()
  });
});

const loginValidators = [
  check('emailAddress')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];



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


module.exports = router;
