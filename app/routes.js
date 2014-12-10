var words = require('./words.json');

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

module.exports = function(app) {

    app.get('/api/word', function(req, res) {
	/* Returns a random word to inspire object writing */
	var index = randomInt(0, words.length - 1);
	res.send(words[index]);
    });

    app.get('*', function(req, res) {
	res.sendfile('./public/index.html');
    });
}
