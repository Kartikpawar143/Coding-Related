const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Sample recipe data (in a real app, this would come from a database)
const recipes = [
  {
    id: 1,
    title: 'Chocolate Chip Cookies',
    ingredients: ['flour', 'butter', 'sugar', 'chocolate chips', 'eggs'],
    instructions: 'Mix ingredients. Bake at 350F for 10 minutes.',
    author: 'Chef John'
  },
  {
    id: 2,
    title: 'Vegetable Soup',
    ingredients: ['carrots', 'celery', 'onions', 'vegetable broth', 'herbs'],
    instructions: 'Chop vegetables. Simmer in broth for 30 minutes.',
    author: 'Chef Maria'
  }
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Community Cookbook API!');
});

// API Routes
app.get('/api/recipes', (req, res) => {
  res.json(recipes);
});

app.get('/api/recipes/:id', (req, res) => {
  const recipe = recipes.find(r => r.id === parseInt(req.params.id));
  if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
  res.json(recipe);
});

app.post('/api/recipes', (req, res) => {
  const newRecipe = {
    id: recipes.length + 1,
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    author: req.body.author
  };
  
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});