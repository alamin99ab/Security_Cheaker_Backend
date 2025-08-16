const express = require('express');
const router = express.Router();
const { analyzeEmailController } = require('../controllers/analysis.controller');

router.post('/analyze', analyzeEmailController);

module.exports = router;