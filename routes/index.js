var express = require('express');
var router = express.Router();
const { Question } = require("../db/models")
/* GET home page. */
const asyncHandler = (handler) => {
  return (req, res, next) => {
      return handler(req, res, next).catch(next);
  };
};
router.get('/', asyncHandler(async (req, res, next) => {
  //displays list of questions
  let listOfQuestions = await Question.findAll({
    raw:true,
    order:[['updatedAt','DESC']]
  }
  );
  // console.log(listOfQuestions);
  res.render('index', { title: 'AppOverflow',listOfQuestions });
}));

module.exports = router;
