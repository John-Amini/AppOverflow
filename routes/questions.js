var express = require('express');
var router = express.Router();

const { csrfProtection, asyncHandler } = require('./utils');

const { check, validationResult } = require('express-validator');
const { requireAuth } = require('../auth');
const db = require("../db/models");
const {Question} = db;

const questionValidation = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a title for your question'),
    check('title').isLength({max:120}).withMessage("Your title is too long"),
  check('content')
    .exists({ checkFalsy: true })
    .withMessage('Please provide some content for your question.'),
];
router.get('/',requireAuth,asyncHandler(function(req, res, next) {
  res.render('questionform',{body:{}});
}));

router.post('/', requireAuth ,questionValidation,asyncHandler(async (req,res,next)=> {
  const {title  , content} = req.body
  const body = req.body;

  const validatorErrors = validationResult(req);
  req.errors = []

  if (!validatorErrors.isEmpty()) {
    req.errors = validatorErrors.array().map((error) => error.msg);
    if(req.errors[0] === "Invalid value") req.errors.shift();
    res.render("questionform",{body,errors:req.errors})
  }
  else{

    try{
    const newQuestion = await Question.create({title,content,user_id:res.locals.user.id});
    res.redirect(`/questions/${newQuestion.id}`);

    }
    catch(err){
      req.errors.push("Please create a unique title");
      res.render("questionform",{body:req.body,errors:req.errors});
    }
  }
}))
router.get('/:id' , asyncHandler(async(req,res,next) =>{
  let id = req.params.id;
  const question = await Question.findByPk(id);
  res.render('question',{question});

}))

router.delete('/:id',requireAuth,asyncHandler(async(req,res,next) => {

  const question = await Question.findByPk(req.params.id)
  if(question && question.user_id === res.locals.user.id){
    await question.destroy();
  }
  else{
    res.errors.push("You cannot delete this");
    res.render("/");
  }

  res.send("Send a delete request")
}))
module.exports = router;
