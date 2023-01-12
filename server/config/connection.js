const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rent-a-fit', {
});

module.exports = mongoose.connection;