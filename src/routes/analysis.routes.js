const express = require('express');
const router = express.Router();
const { analyzeEmailController } = require('../controllers/analysis.controller');

// POST /api/analyze
router.post('/analyze', analyzeEmailController);

module.exports = router;