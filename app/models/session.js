var mongoose = require('mongoose');

var Session = mongoose.model('Session', {
    userId: ObjectId,
    text: String,
    date: Date,
    word: String
});
