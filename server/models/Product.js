const mongoose = require('mongoose');
const { Schema } = mongoose;
const reviewSchema = require('./Review');

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
  reviews: [reviewSchema]
});

productSchema.virtual('reviewCount').get(function() {
  return this.reviews.length;
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
