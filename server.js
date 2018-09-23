var express = require("express");
var app = express();
var port = process.env.PORT || 3001;

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

// read cookies (needed for auth)
app.use(cookieParser());
// get information from html forms
app.use(bodyParser());

//server the Angular app folder as main root folder
app.use(express.static(__dirname + '/app'));

//default route for hashbang on page refresh
app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/app/index.html');
});

app.listen(port);
console.log('Started on port ' + port);