

const db = require('../config/connection');
const { User, Coffee} = require('../models');

const coffeeData = require('./coffeeSeed.json');
// const reviewData = require('./reviewSeed.json');
const userData = require('./userSeed.json');


db.once('open', async () => {
    // clean database
    await Coffee.deleteMany({});
    await User.deleteMany({});
    // await Review.deleteMany({});

    // bulk create each model
    const users = await User.insertMany(userData);
    const coffees = await Coffee.insertMany(coffeeData);
    // const reviews = await Review.insertMany(reviewData);







    console.log('all done!');
    process.exit(0);
});
