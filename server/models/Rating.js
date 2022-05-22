const mongoose = require('mongoose');

const { Schema } = mongoose;

const ratingSchema = new Schema({
    rating: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

const Rating = mongoose.model('Rating', ratingSchema);


module.exports = Rating;
