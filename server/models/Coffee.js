const mongoose = require('mongoose');
const Rating = require('./Rating');
const Review = require('./Review');


const { Schema, model } = mongoose;

const coffeeSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    roast: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    ratings: [Rating.schema],
    reviews: [Review.schema]
});



const Coffee = mongoose.model('Coffee', coffeeSchema);

module.exports = Coffee;
