const express = require('express');
const setupProxy = require('./src/setupProxy');

const app = express();

setupProxy(app);

app.use('/', express.static('build'));

app.listen('8080');
