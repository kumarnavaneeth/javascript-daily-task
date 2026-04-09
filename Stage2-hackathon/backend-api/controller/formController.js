const { request, response } = require('express');
const services = require('../services/formService');
exports.getAllQuestions = async (request, response) => {
    const questions = await services.getQuestions();
    response.json(questions);
}
exports.submitForm = async (request, response) => {
    const {answers} = request.body;
    if(!answers){
       return response.status(400).end();
    }
    if(!Array.isArray(answers)){
        return response.status(400).end();
    }
     if(answers.length==0){
        return response.status(400).end();
    }
    const saved = await services.saveForm({answers});
    return response.status(201).json(saved);
}

