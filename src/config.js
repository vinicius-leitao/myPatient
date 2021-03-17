const express = require('express');
const routes = require('./routes');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static('public'));
app.use('/', routes);

module.exports = app;