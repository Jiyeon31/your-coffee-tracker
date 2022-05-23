const mongoose = require('mongoose');

const { Schema } = mongoose;
const reviewSchema = require('./Review');
const ratingSchema = require('./Rating');

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  reviews: [reviewSchema],
  ratings: [ratingSchema]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
