var express = require('express');
var router = express.Router();


const asyncHandler = (handler) => {
  return (req, res, next) => {
      return handler(req, res, next).catch(next);
  };
};

router.get('/', function(req, res, next) {
  res.send('RETRIEVE FORM TO CREATE A NEW QUESTION');
});

router.get('/:id' , asyncHandler(async(req,res,next) =>{
res.send("Specific Question")

}))

router.delete('/:id',asyncHandler(async(req,res,next) => {
  res.send("Send a delete request")
}))
module.exports = router;
