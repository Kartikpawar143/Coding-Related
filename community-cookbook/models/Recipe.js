const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  story: {
    type: String,
    maxlength: [2000, 'Story cannot be more than 2000 characters']
  },
  image: {
    type: String,
    required: [true, 'Please add an image']
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'Please select a category']
  },
  cuisine: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cuisine',
    required: [true, 'Please select a cuisine']
  },
  prepTime: {
    type: Number,
    required: [true, 'Please add preparation time'],
    min: [0, 'Preparation time cannot be negative']
  },
  cookTime: {
    type: Number,
    required: [true, 'Please add cooking time'],
    min: [0, 'Cooking time cannot be negative']
  },
  servings: {
    type: Number,
    required: [true, 'Please add number of servings'],
    min: [1, 'Servings must be at least 1']
  },
  ingredients: [{
    amount: {
      type: String,
      required: [true, 'Please add an amount']
    },
    name: {
      type: String,
      required: [true, 'Please add an ingredient name']
    }
  }],
  instructions: [{
    type: String,
    required: [true, 'Please add instructions']
  }],
  stepImages: [{
    type: String
  }],
  notes: [{
    type: String
  }],
  substitutions: [{
    ingredient: String,
    alternatives: String
  }],
  tags: [{
    type: String
  }],
  rating: {
    type: Number,
    min: [0, 'Rating cannot be below 0'],
    max: [5, 'Rating cannot be above 5'],
    default: 0
  },
  ratingCount: {
    type: Number,
    default: 0
  },
  totalRating: {
    type: Number,
    default: 0
  },
  featured: {
    type: Boolean,
    default: false
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Calculate average rating when retrieving a recipe
RecipeSchema.pre('find', function() {
  this.populate('author', 'name avatar');
  this.populate('category', 'name slug');
  this.populate('cuisine', 'name slug');
});

RecipeSchema.pre('findOne', function() {
  this.populate('author', 'name avatar');
  this.populate('category', 'name slug');
  this.populate('cuisine', 'name slug');
});

module.exports = mongoose.model('Recipe', RecipeSchema);