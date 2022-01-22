var express = require('express');
var router = express.Router();

const { csrfProtection, asyncHandler } = require('./utils');

const { check, validationResult } = require('express-validator');
const { requireAuth } = require('../auth');
const db = require("../db/models");
const { Question, Answer, Comment } = db;

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

const commentValidation = [check('new-comment-content').exists({ checkFalsy: true }).withMessage("Please provide an actual comment")]
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

    order: [
      [db.Answer, 'updatedAt', 'DESC']
    ],
    include: [db.User, {
      model: db.Answer,
      order: [
        [db.Comment, 'updatedAt', 'DESC']
      ],
      include: {
        model: db.Comment,
      }
    }],

  });
  const listOfAnswers = question.Answers;
  const userPostedQuestion = question.User.dataValues
  res.render('question', { question, listOfAnswers, userPostedQuestion });
}))


router.delete('/:id', requireAuth, asyncHandler(async (req, res, next) => {

  const question = await Question.findByPk(req.params.id)

  if (question && question.user_id === res.locals.user.id) {
    await question.destroy();
  }
  else {
    res.errors.push("You cannot delete this");
    res.render("index");
  }
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
      await updateUpdatedAt(question);
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

router.delete('/:id/comments/:commentId', asyncHandler(async (req,res,next)=>{
  const {id,commentId} = req.params;
  const comment = await Comment.findByPk(commentId);
  if(comment && comment.user_id === res.locals.user.id){
    await comment.destroy();
    req.method = 'GET'
    res.redirect(303,`/questions/${id}`)
  }
  else{
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
router.post('/:id/comments', requireAuth, commentValidation, asyncHandler(async (req, res, next) => {
  let newCommentContent = req.body.newCommentContent;
  let answerId = req.body.answerId;
  let questionId = req.params.id;
  let question = await makeQuery(questionId);
  let listOfAnswers = question.Answers
  const validatorErrors = validationResult(req);
  req.errors = []
  const body = req.body;
  if (newCommentContent === "") {
    req.errors = validatorErrors.array().map((error) => error.msg);
    if (req.errors[0] === "Invalid value") req.errors.shift();
    res.method = 'GET'
    res.render("question", { body, question, errors: req.errors, listOfAnswers })
  }
  else {
    try {
      const newComment = await Comment.create({ answer_id: answerId, content: newCommentContent, user_id: res.locals.user.id })
      await updateUpdatedAt(question);
      return res.redirect(`/questions/${questionId}`)
    } catch (err) {
      req.errors.push("Something went wrong try again");
      res.render("question", { body: req.body, errors: req.errors });
    }
  }
  res.redirect(`/questions/${req.params.id}`);
}))

router.put("/:id/comments/:commentId", asyncHandler(async (req,res,next)=>{
  const content = req.body.content;
  const id = req.params.id;
  const commentId = req.params.commentId;
  const comment = await Comment.findByPk(commentId);
  if(comment && comment.user_id === res.locals.user.id){
    comment.content = content;
    await comment.save();
  } else{
    res.send("Invalid Edit");
  }
  res.send("Edit Valid");
}))

async function makeQuery(id) {
  const question = await Question.findByPk(id, {
    order: [
      [db.Answer, 'updatedAt', 'DESC']
    ],
    include: db.User,
    include: {
      model: db.Answer,
      order: [
        [db.Comment, 'updatedAt', 'DESC']
      ],
      include: {
        model: db.Comment,
      }
    }
  });
  return question;
}
async function updateUpdatedAt(question) {
  question.changed('updatedAt', true);
  await question.update({
    updatedAt: new Date()
  })
}
module.exports = router;
