const express = require('express');
const { check } = require('express-validator');
const {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  rateRecipe,
  getFeaturedRecipes,
  getLatestRecipes,
  getUserRecipes
} = require('../controllers/recipeController');
const { getRecipeComments, addComment } = require('../controllers/commentController');
const { protect } = require('../middleware/auth');
const { uploadSingle } = require('../middleware/upload');

const router = express.Router();

// Recipe routes
router.route('/')
  .get(getRecipes)
  .post(
    protect,
    uploadSingle('image'),
    [
      check('title', 'Title is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
      check('category', 'Category is required').not().isEmpty(),
      check('cuisine', 'Cuisine is required').not().isEmpty(),
      check('prepTime', 'Preparation time is required').isNumeric(),
      check('cookTime', 'Cooking time is required').isNumeric(),
      check('servings', 'Number of servings is required').isNumeric()
    ],
    createRecipe
  );

router.route('/:id')
  .get(getRecipe)
  .put(protect, uploadSingle('image'), updateRecipe)
  .delete(protect, deleteRecipe);

router.route('/:id/rate')
  .post(protect, rateRecipe);

router.route('/featured')
  .get(getFeaturedRecipes);

router.route('/latest')
  .get(getLatestRecipes);

router.route('/user/:userId')
  .get(getUserRecipes);

// Comment routes
router.route('/:recipeId/comments')
  .get(getRecipeComments)
  .post(
    protect,
    [check('text', 'Comment text is required').not().isEmpty()],
    addComment
  );

module.exports = router;