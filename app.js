/**
 * Module dependencies
 */

var express = require('express')
  , path = require('path')
  , fs = require('fs')
  , favicon = require('serve-favicon')
;

// create express app
var app = express();




// configure express stuff
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// custom middleware
app.use(function(req, res, next) {
    console.log('Time: %d; Route: %s', Date.now(), req.url);
    next();
});


app.get('/', function(req, res) {

    var planet = 'Earth'
    var tweetText = 'I am on planet ' + planet + '! Which planet are you on? Find out at http://whichplanetamion.mybluemix.net #WhichPlanetAmIOn #SpaceAppsNYC #IBMBluemix';
    var tweetTextURI = encodeURIComponent(tweetText);
    
    res.render('which', {
	planet: planet,
	tweetTextURI: tweetTextURI
    });

});



var port = process.env.PORT || 3001;

// START SERVER
// ======================================
app.listen(port);
console.log('listening on port ' + port);
