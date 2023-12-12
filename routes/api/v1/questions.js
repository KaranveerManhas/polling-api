const express = require('express');
const router = express.Router();
const QuestionController = require('../../../controllers/question_controller');
const OptionsController = require('../../../controllers/option_controller');

router.post('/create', QuestionController.createQuestion);
router.get('/:id', QuestionController.viewQuestion);
router.delete('/:id/delete', QuestionController.deleteQuestion);
router.use('/:id/options/create', OptionsController.create);

module.exports = router;