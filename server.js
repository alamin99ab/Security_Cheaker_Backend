const express = require('express');
const cors = require('cors');
const { PORT } = require('./src/config');
const analysisRoutes = require('./src/routes/analysis.routes');

const app = express();

// CORS সমস্যার সমাধানের জন্য নির্দিষ্ট কনফিগারেশন
const corsOptions = {
  origin: "*", // যেকোনো ডোমেইন থেকে রিকোয়েস্ট আসার অনুমতি দেয়
};
app.use(cors(corsOptions));

app.use(express.json());

// API Routes
app.use('/api', analysisRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('AI Backend is ready! ✅');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});