const { analyzeEmailWithDeepSeek } = require('../services/deepseek.service');

const analyzeEmailController = async (req, res) => {
  try {
    const { emailText } = req.body;
    if (!emailText || emailText.trim() === '') {
      return res.status(400).json({ error: 'Email text cannot be empty.' });
    }
    const result = await analyzeEmailWithDeepSeek(emailText);
    return res.status(200).json(result);
  } catch (error) {
    console.error('Controller Error:', error.message);
    return res.status(500).json({ error: 'Internal server error while analyzing the email.' });
  }
};

module.exports = { analyzeEmailController };