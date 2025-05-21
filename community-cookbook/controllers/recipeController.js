const Recipe = require('../models/Recipe');
const Category = require('../models/Category');
const Cuisine = require('../models/Cuisine');
const { validationResult } = require('express-validator');
const fs = require('fs');

// @desc    Get all recipes
// @route   GET /api/recipes
// @access  Public
exports.getRecipes = async (req, res, next) => {
  try {
    let query;

    // Copy req.query
    const reqQuery = { ...req.query };

    // Fields to exclude
    const removeFields = ['select', 'sort', 'page', 'limit', 'search'];

    // Loop over removeFields and delete them from reqQuery
    removeFields.forEach(param => delete reqQuery[param]);

    // Create query string
    let queryStr = JSON.stringify(reqQuery);

    // Create operators ($gt, $gte, etc)
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);

    // Finding resource
    query = Recipe.find(JSON.parse(queryStr));

    // Search functionality
    if (req.query.search) {
      const searchRegex = new RegExp(req.query.search, 'i');
      query = query.or([
        { title: searchRegex },
        { description: searchRegex },
        { 'tags': searchRegex }
      ]);
    }

    // Select Fields
    if (req.query.select) {
      const fields = req.query.select.split(',').join(' ');
      query = query.select(fields);
    }

    // Sort
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Recipe.countDocuments(JSON.parse(queryStr));

    query = query.skip(startIndex).limit(limit);

    // Executing query
    const recipes = await query;

    // Pagination result
    const pagination = {};

    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit
      };
    }

    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      };
    }

    res.status(200).json({
      success: true,
      count: recipes.length,
      pagination,
      data: recipes
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single recipe
// @route   GET /api/recipes/:id
// @access  Public
exports.getRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        success: false,
        error: 'Recipe not found'
      });
    }

    res.status(200).json({
      success: true,
      data: recipe
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create new recipe
// @route   POST /api/recipes
// @access  Private
exports.createRecipe = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    // Add user to req.body
    req.body.author = req.user.id;

    // Handle image upload
    if (req.file) {
      req.body.image = `/uploads/${req.file.filename}`;
    }

    // Parse ingredients, instructions, and notes from JSON strings if needed
    if (typeof req.body.ingredients === 'string') {
      req.body.ingredients = JSON.parse(req.body.ingredients);
    }
    
    if (typeof req.body.instructions === 'string') {
      req.body.instructions = JSON.parse(req.body.instructions);
    }
    
    if (typeof req.body.notes === 'string') {
      req.body.notes = JSON.parse(req.body.notes);
    }

    if (typeof req.body.tags === 'string') {
      req.body.tags = req.body.tags.split(',').map(tag => tag.trim());
    }

    // Create recipe
    const recipe = await Recipe.create(req.body);

    // Update category and cuisine recipe counts
    await Category.findByIdAndUpdate(req.body.category, {
      $inc: { recipeCount: 1 }
    });
    
    await Cuisine.findByIdAndUpdate(req.body.cuisine, {
      $inc: { recipeCount: 1 }
    });

    res.status(201).json({
      success: true,
      data: recipe
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update recipe
// @route   PUT /api/recipes/:id
// @access  Private
exports.updateRecipe = async (req, res, next) => {
  try {
    let recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        success: false,
        error: 'Recipe not found'
      });
    }

    // Make sure user is recipe owner
    if (recipe.author.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to update this recipe'
      });
    }

    // Handle image upload
    if (req.file) {
      // Delete old image if it exists
      if (recipe.image && recipe.image !== 'default-recipe.jpg') {
        const imagePath = `.${recipe.image}`;
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }
      req.body.image = `/uploads/${req.file.filename}`;
    }

    // Parse ingredients, instructions, and notes from JSON strings if needed
    if (typeof req.body.ingredients === 'string') {
      req.body.ingredients = JSON.parse(req.body.ingredients);
    }
    
    if (typeof req.body.instructions === 'string') {
      req.body.instructions = JSON.parse(req.body.instructions);
    }
    
    if (typeof req.body.notes === 'string') {
      req.body.notes = JSON.parse(req.body.notes);
    }

    if (typeof req.body.tags === 'string') {
      req.body.tags = req.body.tags.split(',').map(tag => tag.trim());
    }

    // Update recipe
    recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: recipe
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete recipe
// @route   DELETE /api/recipes/:id
// @access  Private
exports.deleteRecipe = async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        success: false,
        error: 'Recipe not found'
      });
    }

    // Make sure user is recipe owner
    if (recipe.author.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to delete this recipe'
      });
    }

    // Delete image file
    if (recipe.image && recipe.image !== 'default-recipe.jpg') {
      const imagePath = `.${recipe.image}`;
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    // Update category and cuisine recipe counts
    await Category.findByIdAndUpdate(recipe.category, {
      $inc: { recipeCount: -1 }
    });
    
    await Cuisine.findByIdAndUpdate(recipe.cuisine, {
      $inc: { recipeCount: -1 }
    });

    await recipe.remove();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Rate recipe
// @route   POST /api/recipes/:id/rate
// @access  Private
// @desc    Rate recipe
// @route   POST /api/recipes/:id/rate
// @access  Private
exports.rateRecipe = async (req, res, next) => {
  try {
    const { rating } = req.body;
    
    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a rating between 1 and 5'
      });
    }

    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        success: false,
        error: 'Recipe not found'
      });
    }

    // Update recipe rating
    const newTotalRating = recipe.totalRating + rating;
    const newRatingCount = recipe.ratingCount + 1;
    const newRating = newTotalRating / newRatingCount;

    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      {
        totalRating: newTotalRating,
        ratingCount: newRatingCount,
        rating: newRating
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: updatedRecipe
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get featured recipes
// @route   GET /api/recipes/featured
// @access  Public
exports.getFeaturedRecipes = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 4;
    const recipes = await Recipe.find({ featured: true })
      .sort('-createdAt')
      .limit(limit);

    res.status(200).json({
      success: true,
      count: recipes.length,
      data: recipes
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get latest recipes
// @route   GET /api/recipes/latest
// @access  Public
exports.getLatestRecipes = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 8;
    const recipes = await Recipe.find()
      .sort('-createdAt')
      .limit(limit);

    res.status(200).json({
      success: true,
      count: recipes.length,
      data: recipes
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get recipes by user
// @route   GET /api/recipes/user/:userId
// @access  Public
exports.getUserRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find({ author: req.params.userId })
      .sort('-createdAt');

    res.status(200).json({
      success: true,
      count: recipes.length,
      data: recipes
    });
  } catch (err) {
    next(err);
  }
};