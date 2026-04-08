const { request, response } = require('express');
const services = require('../services/formService');
exports.getAllQuestions = async (request, response) => {
    const questions = await services.getQuestions();
    response.json(questions);
}
exports.submitForm = async (request, response) => {
    const {answers} = request.body;
    const saved = await services.saveForm({answers});
    response.status(201).json(saved);
}

