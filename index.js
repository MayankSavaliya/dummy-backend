const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// For local testing only
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Sample backend listening at http://localhost:${port}`);
  });
}

module.exports = app;
