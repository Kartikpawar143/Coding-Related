const express = require('express');
const { check } = require('express-validator');
const {
  getCategories,
  getCategory,
  getCategoryBySlug,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryRecipes,
  getCategoryRecipesBySlug,
  getPopularCategories
} = require('../controllers/categoryController');
const { protect } = require('../middleware/auth');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.route('/')
  .get(getCategories)
  .post(
    protect,
    upload.fields([
      { name: 'image', maxCount: 1 },
      { name: 'icon', maxCount: 1 }