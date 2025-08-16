require('dotenv').config();

const config = {
  PORT: process.env.PORT || 5000,
  OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY,
};

module.exports = config;