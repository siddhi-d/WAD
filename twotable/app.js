const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Serve static files
app.use(express.static('public'));

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
