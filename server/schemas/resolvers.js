const { AuthenticationError } = require('apollo-server-express');
const { User, Product, Category} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    findReviews: async(parent, args, context) => {
      const productInfo = await Product.findById({_id: args._id}).populate({
        populate: 'reviews'
      })

      return productInfo;

    },

    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id }).populate({
          path: 'users.reviews',
          populate: 'reviews'
        })

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('thoughts')
        .populate('friends');
    },
    user: async (parent, { userName }) => {
      const user = await User.findOne({ userName })
        .select('-__v -password')
      console.log(user);
      const {ratedProducts} = user;

      const products = [];

      for (let item in ratedProducts) {
        console.log(ratedProducts[item])
        products.push(await Product.findOne(ratedProducts[item]))
        
      }

      return {user, products}
        
    },
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params).populate('category');
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('category');
    },
    getProduct: async (parent, {_id}) => {
      return await Product.findById(_id);

    },
    reviews: async (parent, { lastName }) => {
      const params = lastName ? { lastName } : {};
      return Review.find(params).sort({ createdAt: -1 });
    },
    review: async (parent, { _id }) => {
      return Review.findOne({ _id });
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    
    addReview: async (parent, { productId, reviewBody }, context) => {
      if (context.user) {

        const user = await User.findOne({ _id: context.user._id }).populate({
          path: 'users.ratedProducts',
          populate: 'ratedProducts'
        })

        const alreadyRated = user.ratedProducts.includes(productId)

        console.log (alreadyRated)

        if (!alreadyRated) {

          // see if userId exists already for that product.  If so, then just return, if not continue...
        const updatedProduct = await Product.findOneAndUpdate(
          { _id: productId },
          { $push: { reviews: { reviewBody, firstName: context.user.firstName, userName: context.user.userName, userId: context.user._id } } },
          { new: true, runValidators: true }
        );
        


          console.log ('NOW RATED!')
        

        
        return updatedProduct;
      } else {
        throw new AuthenticationError("You have already rated this item!")
      }

    }

      throw new AuthenticationError('You need to be logged in!');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
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
    addRatedProduct: async (parent, { productId}, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { ratedProducts: productId} },
          { new: true }
        ).populate('ratedProducts');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};
  

module.exports = resolvers;
