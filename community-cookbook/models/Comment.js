const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  recipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  text: {
    type: String,
    required: [true, 'Please add a comment'],
    maxlength: [1000, 'Comment cannot be more than 1000 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Populate user info when retrieving comments
CommentSchema.pre('find', function() {
  this.populate('user', 'name avatar');
});

CommentSchema.pre('findOne', function() {
  this.populate('user', 'name avatar');
});

module.exports = mongoose.model('Comment', CommentSchema);