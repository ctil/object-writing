var express = require('express');
var app = express();
var mongoose = require('mongoose');
// Log requests to console
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));
// Log every request to the console
app.use(morgan('dev'));

// routes
require('./app/routes')(app);

// start app 
app.listen(port);
console.log('Starting on port ' + port);
exports = module.exports = app;
