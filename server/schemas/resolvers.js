const { AuthenticationError } = require('apollo-server-express');
const { User, Coffee } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                // .populate('ratings')
                .populate('reviews')
      
              return userData;
            }
      
            throw new AuthenticationError('Not logged in');
          },
          users: async () => {
            return User.find()
              .select('-__v -password')
              // .populate('ratings')
              .populate('reviews')
          },
          user: async (parent, { username }) => {
            return User.findOne({ username })
              .select('-__v -password')
              // .populate('ratings')
              .populate('reviews')
          },
          coffees: async () => {
            return await Coffee.find({})
          },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
          },
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
            return { token, user };
          },
          // addRating: async (parent, { coffeeId, rating }, context) => {
          //   if (context.user) {
          //     const updatedReview = await Coffee.findOneAndUpdate(
          //       { _id: coffeeId },
          //       { $push: { ratings: { rating, username: context.user.username } } },
          //       { new: true, runValidators: true }
          //     );
      
          //     return updatedRating;
          //   }
      
          //   throw new AuthenticationError('You need to be logged in!');
          // },
          addReview: async (parent, { coffeeId, review }, context) => {
            if (context.user) {
              const updatedReview = await Coffee.findOneAndUpdate(
                { _id: coffeeId },
                { $push: { reviews: { review, username: context.user.username } } },
                { new: true, runValidators: true }
              );
      
              return updatedReview;
            }
      
            throw new AuthenticationError('You need to be logged in!');
          },
    }


}

module.exports = resolvers;
