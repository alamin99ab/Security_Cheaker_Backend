const express = require('express');
const cors = require('cors');
const { PORT } = require('./src/config');
const analysisRoutes = require('./src/routes/analysis.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', analysisRoutes);

app.get('/', (req, res) => {
  res.send('AI Backend is ready! ✅');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});