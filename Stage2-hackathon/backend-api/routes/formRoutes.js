const express=require('express')
const router=express.Router();
const controller=require('../controller/formController');
router.get('/',controller.getAllQuestions);
module.exports=router;