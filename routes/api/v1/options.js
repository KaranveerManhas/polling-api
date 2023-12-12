const express = require('express');
const router = express.Router();
const OptionsController = require('../../../controllers/option_controller');

router.post('/create', OptionsController.create);
router.delete('/:id/delete', OptionsController.delete);
router.post('/:id/add_vote', OptionsController.addVote);


module.exports = router;