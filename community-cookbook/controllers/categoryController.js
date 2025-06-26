const Category = require('../models/Category');
const Recipe = require('../models/Recipe');
const { validationResult } = require('express-validator');
const fs = require('fs');

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find().sort('name');

    res.status(200).json({
      success: true,
      count: categories.length,
      data: categories
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single category
// @route   GET /api/categories/:id
// @access  Public
exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        error: 'Category not found'
      });
    }

    res.status(200).json({
      success: true,
      data: category
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get category by slug
// @route   GET /api/categories/slug/:slug
// @access  Public
exports.getCategoryBySlug = async (req, res, next) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug });

    if (!category) {
      return res.status(404).json({
        success: false,
        error: 'Category not found'
      });
    }

    res.status(200).json({
      success: true,
      data: category
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create new category
// @route   POST /api/categories
// @access  Private (Admin only)
exports.createCategory = async (req, res, next) => {
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

    const category = await Category.create(req.body);

    res.status(201).json({
      success: true,
      data: category
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update category
// @route   PUT /api/categories/:id
// @access  Private (Admin only)
exports.updateCategory = async (req, res, next) => {
  try {
    let category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        error: 'Category not found'
      });
    }

    // Handle image upload
    if (req.files && req.files.image) {
      // Delete old image if it exists
      if (category.image) {
        const imagePath = `.${category.image}`;
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }
      req.body.image = `/uploads/${req.files.image[0].filename}`;
    }

    if (req.files && req.files.icon) {
      // Delete old icon if it exists
      if (category.icon) {
        const iconPath = `.${category.icon}`;
        if (fs.existsSync(iconPath)) {
          fs.unlinkSync(iconPath);
        }
      }
      req.body.icon = `/uploads/${req.files.icon[0].filename}`;
    }

    category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: category
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete category
// @route   DELETE /api/categories/:id
// @access  Private (Admin only)
exports.deleteCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        error: 'Category not found'
      });
    }

    // Check if category has recipes
    const recipeCount = await Recipe.countDocuments({ category: req.params.id });
    if (recipeCount > 0) {
      return res.status(400).json({
        success: false,
        error: `Cannot delete category with ${recipeCount} recipes. Reassign recipes first.`
      });
    }

    // Delete image files
    if (category.image) {
      const imagePath = `.${category.image}`;
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    if (category.icon) {
      const iconPath = `.${category.icon}`;
      if (fs.existsSync(iconPath)) {
        fs.unlinkSync(iconPath);
      }
    }

    await category.remove();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get recipes by category
// @route   GET /api/categories/:id/recipes
// @access  Public
exports.getCategoryRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.find({ category: req.params.id })
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

// @desc    Get recipes by category slug
// @route   GET /api/categories/slug/:slug/recipes
// @access  Public
exports.getCategoryRecipesBySlug = async (req, res, next) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug });

    if (!category) {
      return res.status(404).json({
        success: false,
        error: 'Category not found'
      });
    }

    const recipes = await Recipe.find({ category: category._id })
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

// @desc    Get popular categories
// @route   GET /api/categories/popular
// @access  Public
exports.getPopularCategories = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 6;
    const categories = await Category.find()
      .sort('-recipeCount')
      .limit(limit);

    res.status(200).json({
      success: true,
      count: categories.length,
      data: categories
    });
  } catch (err) {
    next(err);
  }
};