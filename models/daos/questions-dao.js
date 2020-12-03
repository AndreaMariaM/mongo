const questionsModel = require('../models/questions/questions-model.js')
const findAllQuestions = () => questionsModel.find()
const findQuestionForQuiz = (qzId) => questionModel.find("quizId"=qzId)
const findQuestionById = (questionId) => questionModel.findById(questionId)
module.exports = { findAllQuestions, findQuestionForQuiz, findQuestionById }