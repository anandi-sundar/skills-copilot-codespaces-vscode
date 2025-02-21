// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Add middleware to handle JSON data
app.use(express.json());

// Create an array to store comments
let comments = [];

// Create a GET route to retrieve all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a POST route to add a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  // Add the comment to the array
  comments.push(comment);
  res.json('Comment added successfully');
});

// Start the web server on port 3000
app.listen(port, () => {
  console.log(`Web server is listening on port ${port}`);
});