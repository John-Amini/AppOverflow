const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const { check, validationResult } = require('express-validator');
const db = require('../db/models');

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

const loginValidators = [
    check('emailAddress')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Email Address'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Password'),
];

const userSignupValidators = [
    check('username')
        .exists({ checkFalsy: true })
        .withMessage('Please Provide a Display Name')
        .isLength({ max: 24 })
        .withMessage('Display Names can not be longer than 24 characters')
        .custom(async (value) => {
            return db.User.findOne({ where: { username: value } })
                .then(user => {
                    if (user) {
                        return Promise.reject('Display Name already taken')
                    }
                })
        }),
    check('email')
        .exists({ checkFalsy: true })
        .withMessage("Please provide an email address")
        .isLength({ max: 255 })
        .withMessage("Email can not be longer than 255 characters")
        .isEmail()
        .withMessage('Please provide valid email')
        .custom(async (value) => {
            return db.User.findOne({ where: { email: value } })
                .then((user) => {
                    if (user) {
                        return Promise.reject('Email already taken')

                    }
                })
        })
        .withMessage('Email already exists'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage("Please provide a Password")
        .isLength({ max: 50 })
        .withMessage('Password can not be longer that 50 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/)
        .withMessage('Should contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")')
]



module.exports = {
    csrfProtection,
    asyncHandler,
    userSignupValidators,
    loginValidators
}
