const axios = require('axios');
const { OPENROUTER_API_KEY } = require('../config'); // নতুন config ভেরিয়েবল

const analyzeEmailWithDeepSeek = async (emailText) => {
  // পরিবর্তন ১: API URL পরিবর্তন করা হয়েছে
  const apiUrl = 'https://openrouter.ai/api/v1/chat/completions';

  const prompt = `
    Analyze this email text for phishing signs. Provide your response strictly in JSON format. The JSON object must have three keys:
    1. "riskScore": An integer between 0 and 100 representing the phishing risk.
    2. "verdict": A short, one-sentence conclusion (e.g., "This email is highly suspicious and likely a phishing attempt.").
    3. "analysis": A string containing a brief, point-by-point explanation of the findings. Use newline characters (\\n) for bullet points.

    Email to analyze:
    "${emailText}"
  `;

  try {
    const response = await axios.post(
      apiUrl,
      {
        // পরিবর্তন ২: মডেলের নাম OpenRouter-এর ফরম্যাট অনুযায়ী পরিবর্তন করা হয়েছে
        model: 'deepseek/deepseek-chat', 
        messages: [
          { role: 'system', content: 'You are a cybersecurity expert that analyzes emails for phishing and provides responses ONLY in the specified JSON format.' },
          { role: 'user', content: prompt },
        ],
      },
      { 
        headers: { 
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          // পরিবর্তন ৩: OpenRouter-এর জন্য এই হেডারটি যুক্ত করা ভালো
          'HTTP-Referer': 'http://localhost:3000', // আপনার প্রজেক্টের ঠিকানা
          'X-Title': 'AI Phishing Analyzer', // আপনার প্রজেক্টের নাম
        } 
      }
    );

    const content = response.data.choices[0].message.content;
    const jsonString = content.substring(content.indexOf('{'), content.lastIndexOf('}') + 1);
    return JSON.parse(jsonString);

  } catch (error) {
    console.error('OpenRouter API Error:', error.response ? error.response.data : error.message);
    throw new Error('Failed to communicate with the AI analysis service.');
  }
};

module.exports = { analyzeEmailWithDeepSeek };