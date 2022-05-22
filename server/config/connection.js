const mongoose = require('mongoose');

mongoose.connect(process.env.ATLAS_URI || 'mongodb://127.0.0.1:27017/mernshopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
