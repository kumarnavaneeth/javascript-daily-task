const { request, response } = require('express');
const services=require('../services/formService');
exports.getAllQuestions=async(request,response)=>{
    const questions=await services.getQuestions();
    response.json(questions);
}