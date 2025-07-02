const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});
app.get('/health', (req, res) => {
  res.json({ status: 'ok' }); 
});
app.get('/health/abc', (req, res) => {
  // For local testing only
  res.json({ status: 'ok', message: 'This is a test endpoint.' });
});
app.listen(port, () => {
  console.log(`Sample backend listening at http://localhost:${port}`);
});

module.exports = app;
