// Import Express
const express = require('express');
const path = require('path');

// Initialize app
const app = express();
const PORT = process.env.PORT || 3000;  // ✅ Use Render's assigned port

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
