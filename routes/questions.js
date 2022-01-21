var express = require('express');
var router = express.Router();

const { csrfProtection, asyncHandler } = require('./utils');

const { check, validationResult } = require('express-validator');
const { requireAuth } = require('../auth');
const db = require("../db/models");
const { Question, Answer } = db;

const questionValidation = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a title for your question'),
  check('title').isLength({ max: 120 }).withMessage("Your title is too long"),
  check('content')
    .exists({ checkFalsy: true })
    .withMessage('Please provide some content for your question.'),
];

const answerValidation =
  [check('new-answer-content')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an actual answer')]
router.get('/', requireAuth, function (req, res, next) {
  res.render("questionform", { body: {} });
});

router.post('/', requireAuth, questionValidation, asyncHandler(async (req, res, next) => {
  const { title, content } = req.body
  const body = req.body;

  const validatorErrors = validationResult(req);
  req.errors = []

  if (!validatorErrors.isEmpty()) {
    req.errors = validatorErrors.array().map((error) => error.msg);
    if (req.errors[0] === "Invalid value") req.errors.shift();
    res.render("questionform", { body, errors: req.errors })
  }
  else {

    try {
      const newQuestion = await Question.create({ title, content, user_id: res.locals.user.id });
      res.redirect(`/questions/${newQuestion.id}`);

    }
    catch (err) {
      req.errors.push("Please create a unique title");
      res.render("questionform", { body: req.body, errors: req.errors });
    }
  }
}))
router.get('/:id', asyncHandler(async (req, res, next) => {
  let id = req.params.id;
  const question = await Question.findByPk(id, {
    include: [db.User, Answer]
  });
  const userPostedQuestion = question.User.dataValues
  console.log("askdjhbaskdbaskd")
  console.log(id)
  console.log("ALOKINJDSLKASDLKADLKASJDNNLK")
  const listOfAnswers = await Answer.findAll({
    raw: true,
    order: [['updatedAt', 'DESC']],
    where: {
      question_id: id
    }
  })
  res.render('question', { question, listOfAnswers, userPostedQuestion });

}))


router.delete('/:id', requireAuth, asyncHandler(async (req, res, next) => {

  const question = await Question.findByPk(req.params.id)

  //need to find out how to delete all associated comments and answers
  if (question && question.user_id === res.locals.user.id) {
    await question.destroy();
  }
  else {
    res.errors.push("You cannot delete this");
    res.render("index");
  }
  console.log("redirectaksjhskjhfbajkfhasdkjfhskjhsflkjhfskljhakjlhfsdkjhf")
  //redirecting back to main page does not work
  req.method = 'GET'
  console.log(req.method);
  res.redirect(303, '/');
}))
router.put('/:id', requireAuth, asyncHandler(async (req, res, next) => {
  const content = req.body.content;
  const id = req.params.id;
  const question = await Question.findByPk(id);
  if (question && question.user_id === res.locals.user.id) {
    question.content = content;
    await question.save();
  } else {
    res.send("Invalid Edit")
  }
  res.send("Edit valid");
}))

router.post('/:id/answers', requireAuth, answerValidation, asyncHandler(async (req, res, next) => {
  let newAnswerContent = req.body.newAnswerContent
  let question = await Question.findByPk(req.params.id)
  let listOfAnswers = await Answer.findAll({ where: { question_id: req.params.id } })
  const validatorErrors = validationResult(req);
  req.errors = []
  const body = req.body;
  if (newAnswerContent === "") {
    req.errors = validatorErrors.array().map((error) => error.msg);
    if (req.errors[0] === "Invalid value") req.errors.shift();
    res.method = 'GET'
    res.render("question", { body, question, errors: req.errors, listOfAnswers })
  }
  else {
    try {
      const newAnswer = await Answer.create({ question_id: req.params.id, content: newAnswerContent, user_id: res.locals.user.id });
      res.redirect(`/questions/${req.params.id}`);
    }
    catch (err) {
      req.errors.push("Something went wrong try again");
      res.render("question", { body: req.body, errors: req.errors });
    }
    res.redirect(`/questions/${req.params.id}`);
  }

}))
router.delete('/:id/answers/:answerId', asyncHandler(async (req, res, next) => {
  const { id, answerId } = req.params;

  const answer = await Answer.findByPk(answerId);
  if (answer && answer.user_id === res.locals.user.id) {
    await answer.destroy();
    req.method = 'GET'
    res.redirect(303, `/questions/${id}`);
  }
  else {
    res.errors.push("You cannot delete this")
    res.redirect('back')
  }
}))
router.put('/:id/answers/:answerId', requireAuth, asyncHandler(async (req, res, next) => {
  const content = req.body.content;
  const id = req.params.id;
  const answerId = req.params.answerId
  const answer = await Answer.findByPk(answerId);
  if (answer && answer.user_id === res.locals.user.id) {
    answer.content = content;
    await answer.save();
  } else {
    res.send("Invalid Edit")
  }
  res.send("Edit valid");
}))
module.exports = router;
