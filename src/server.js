var express = require('express');
var setupProxy = require('./setupProxy');
var app = express();
setupProxy(app);
app.use('/', express.static('build'));
app.listen('8080');
