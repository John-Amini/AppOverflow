var express = require('express');
var router = express.Router();
const { Question, User, Answer, Vote } = require("../db/models")
const { Op } = require("sequelize")
/* GET home page. */
const asyncHandler = (handler) => {
  return (req, res, next) => {
    return handler(req, res, next).catch(next);
  };
};
router.get('/', asyncHandler(async (req, res, next) => {
  //displays list of questions
  let listOfQuestions = await Question.findAll({
    raw: true,
    order: [['updatedAt', 'DESC']]
  }
  );
  // console.log(listOfQuestions);
  res.render('index', { title: 'AppOverflow', listOfQuestions });
}));

function goToQuestions() {
  console.log("hit")
}

router.post('/search', asyncHandler(async (req, res, next) => {
  const searchInput = req.body.search;

  const listOfQuestions = await Question.findAll({
    include: [User, { model: Answer, include: Vote }],
    where: { title: { [Op.iRegexp]: `[\s\S]*${searchInput}.*` } },
    order: [['updatedAt', 'DESC']],
  })

  console.log("**********************************")
  console.log(listOfQuestions[0].Answers[0].dataValues.Votes.length)
  console.log("**********************************")
  res.render('search-function', { listOfQuestions })
}))

module.exports = router;
