require('dotenv').config();

const config = {
  PORT: process.env.PORT || 5000,
  OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY, // এই লাইনটি পরিবর্তন করুন
};

module.exports = config;