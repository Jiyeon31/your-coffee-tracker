const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
    review: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
