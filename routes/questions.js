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
    //errors need to rerender with error message
    req.errors = validatorErrors.array().map((error) => error.msg);
    if(req.errors[0] === "Invalid value") req.errors.shift();
    res.render("questionform",{body,errors:req.errors})
  }
  else{
    //now try to post it but if title isnt unique they have to try again

    //determine user id somehow based on authentication
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

router.delete('/:id',asyncHandler(async(req,res,next) => {
  console.log("adjhbasjhd")
  console.log(req.params.id);
  const question = await Question.findByPk(req.params.id)
  if(question){
    await question.destroy();
  }
  //NEED TO DO USER VERIFICATION HERE ALSO MAKE SURE THE PERSON TRYING TO DELETE IT IS THE PERSON WHOS OWNS IT
  res.send("Send a delete request")
}))
module.exports = router;
