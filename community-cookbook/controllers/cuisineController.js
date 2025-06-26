const Cuisine = require('../models/Cuisine');
const Recipe = require('../models/Recipe');
const { validationResult } = require('express-validator');
const fs = require('fs');

// @desc    Get all cuisines
// @route   GET /api/cuisines
// @access  Public
exports.getCuisines = async (req, res, next) => {
  try {
    const cuisines = await Cuisine.find().sort('name');

    res.status(200).json({
      success: true,
      count: cuisines.length,
      data: cuisines
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single cuisine
// @route   GET /api/cuisines/:id
// @access  Public
exports.getCuisine = async (req, res, next) => {
  try {
    const cuisine = await Cuisine.findById(req.params.id);

    if (!cuisine) {
      return res.status(404).json({
        success: false,
        error: 'Cuisine not found'
      });
    }

    res.status(200).json({
      success: true,
      data: cuisine
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get cuisine by slug
// @route   GET /api/cuisines/slug/:slug
// @access  Public
exports.getCuisineBySlug = async (req, res, next) => {
  try {
    const cuisine = await Cuisine.findOne({ slug: req.params.slug });

    if (!cuisine) {
      return res.status(404).json({
        success: false,
        error: 'Cuisine not found'
      });
    }

    res.status(200).json({
      success: true,
      data: cuisine
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create new cuisine
// @route   POST /api/cuisines
// @access  Private (Admin only)
exports.createCuisine = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    // Handle image upload
    if (req.files && req.files.image) {
      req.body.image = `/uploads/${req.files.image[0].filename}`;
    }

    if (req.files && req.files.icon) {
      req.body.icon = `/uploads/${req.files.icon[0].filename}`;
    }

    const cuisine = await Cuisine.create(req.body);

    res.status(201).json({
      success: true,
      data: cuisine
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update cuisine
// @route   PUT /api/cuisines/:id
// @access  Private (Admin only)
exports.updateCuisine = async (req, res, next) => {
  try {
    let cuisine = await Cuisine.findById(req.params.id);

    if (!cuisine) {
      return res.status(404).json({
        success: false,
        error: 'Cuisine not found'
      });
    }

    // Handle image upload
    if (req.files && req.files.image) {
      // Delete old image if it exists
      if (cuisine.image) {
        const imagePath = `.${cuisine.image}`;
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }
      req.body.image = `/uploads/${req.files.image[0].filename}`;
    }

    if (req.files && req.files.icon) {
      // Delete old icon if it exists
      if (cuisine.icon) {
        const iconPath = `.${cuisine.icon}`;
        if (fs.existsSync(iconPath)) {
          fs.unlinkSync(iconPath);
        }
      }
      req.body.icon = `/uploads/${req.files.icon[0].filename}`;
    }

    cuisine = await Cuisine.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: cuisine
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete cuisine
// @route   DELETE /api/cuisines/:id
// @access  Private (Admin only)
exports.deleteCuisine = async (req, res, next) => {
  try {
    const cuisine = await Cuisine.findById(req.params.id);

    if (!cuisine) {
      return res.status(404).json({
        success: false,
        error: 'Cuisine not found'
      });
    }

    // Check if cuisine has recipes
    const recipeCount = await Recipe.countDocuments({ cuisine: req.params.id });
    if (recipeCount > 0) {
      return res.status(400).json({
        success: false,
        error: `Cannot delete cuisine with ${recipeCount} recipes. Reassign recipes first.`
      });
    }

    // Delete image files
    if (cuisine.image) {
      const imagePath = `.${cuisine.image}`;
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    if (cuisine.icon) {
      const iconPath = `.${cuisine.icon}`;
      if (fs.existsSync(iconPath)) {
        fs.unlinkSync(iconPath);
      }
    }

    await cuisine.remove();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get recipes by cuisine
// @route   GET /api/cuisines/:id/recipes
// @access  Public
exports.getCuisineRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find({ cuisine: req.params.id })
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

// @desc    Get recipes by cuisine slug
// @route   GET /api/cuisines/slug/:slug/recipes
// @access  Public
exports.getCuisineRecipesBySlug = async (req, res, next) => {
  try {
    const cuisine = await Cuisine.findOne({ slug: req.params.slug });

    if (!cuisine) {
      return res.status(404).json({
        success: false,
        error: 'Cuisine not found'
      });
    }

    const recipes = await Recipe.find({ cuisine: cuisine._id })
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

// @desc    Get popular cuisines
// @route   GET /api/cuisines/popular
// @access  Public
exports.getPopularCuisines = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 6;
    const cuisines = await Cuisine.find()
      .sort('-recipeCount')
      .limit(limit);

    res.status(200).json({
      success: true,
      count: cuisines.length,
      data: cuisines
    });
  } catch (err) {
    next(err);
  }
};