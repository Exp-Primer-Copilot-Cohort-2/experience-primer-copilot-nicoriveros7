// Create web server
var express = require('express');
var app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the path to the views
app.set('views', './views');

// Set the path to the static files
app.use(express.static('./public'));
git add comments.js
//
