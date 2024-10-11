const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

// Endpoint to send products data
app.get('/api/products', (req, res) => {
  const filePath = path.join(__dirname, 'message.txt');

  // Read the message.txt file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read file' });
    }

    try {
      const jsonData = JSON.parse(data); // Ensure message.txt is valid JSON
      res.json(jsonData);
    } catch (parseError) {
      res.status(500).json({ error: 'Failed to parse file data' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
