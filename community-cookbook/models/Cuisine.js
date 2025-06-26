const mongoose = require('mongoose');
const slugify = require('../utils/helpers').slugify;

const CuisineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  slug: {
    type: String,
    unique: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  image: {
    type: String,
    required: [true, 'Please add an image']
  },
  icon: {
    type: String,
    required: [true, 'Please add an icon']
  },
  recipeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create slug from name before saving
CuisineSchema.pre('save', function(next) {
  this.slug = slugify(this.name);
  next();
});

module.exports = mongoose.model('Cuisine', CuisineSchema);