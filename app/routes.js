var words = require('./words.json');
var Session = require('./models/session');

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

module.exports = function(app) {

    app.get('/api/words', function(req, res) {
	/* Returns a random word to inspire object writing */
	var index = randomInt(0, words.length - 1);
	res.send(words[index]);
    });

    app.get('/api/sessions', function(req, res) {
	Session.find(function(err, sessions) {

	    if (err) {
		res.send(err);
	    }

	    res.json(sessions);
	});
    });

    app.post('/api/sessions', function(req, res) {
	Session.create(req.body, function(err, session) {
	    if (err) {
		res.send(err);
	    }
	});
    });

    app.get('*', function(req, res) {
	res.sendfile('./public/index.html');
    });

}
