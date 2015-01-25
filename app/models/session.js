var mongoose = require('mongoose');

module.exports = mongoose.model('Session', {
    // TODO: add users
    //userId: ObjectId,
    text: String,
    date: Date,
    word: String
});
