const express = require('express');
const app = express();
const port = 3000; // Define your desired port

// Set view engine to EJS
app.set('view engine', 'ejs');

// Define routes
app.get('/', (req, res) => {
  // Logic to fetch posts (will be empty for now)
  const posts = []; // Replace with logic to get posts from session or storage
  res.render('index', { posts });
});

app.get('/new', (req, res) => {
  res.render('new-post');
});

// Logic for post creation, editing, and deletion (not implemented yet)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
