const express = require('express');
const router = express.Router();
const QuestionController = require('../../../controllers/question_controller');

router.post('/create', QuestionController.createQuestion);
router.get('/:id', QuestionController.viewQuestion);
router.delete('/:id/delete', QuestionController.deleteQuestion);
router.use('/:id/options', require('./options'));

module.exports = router;