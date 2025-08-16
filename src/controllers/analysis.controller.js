const { analyzeEmailWithDeepSeek } = require('../services/deepseek.service');

const analyzeEmailController = async (req, res) => {
  try {
    const { emailText } = req.body;
    if (!emailText) {
      return res.status(400).json({ error: 'Email text cannot be empty.' });
    }
    const result = await analyzeEmailWithDeepSeek(emailText);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to analyze the email.' });
  }
};

module.exports = { analyzeEmailController };