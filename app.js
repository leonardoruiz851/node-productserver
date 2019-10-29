var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');
var materialsRouter = require('./routes/materials');
var colorsRouter = require('./routes/colors');
var attributesRouter = require('./routes/attributes');

var app = express();
app.use(cors({
    origin: 'http://localhost:3001'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/materials', materialsRouter);
app.use('/colors', colorsRouter);
app.use('/attributes', attributesRouter);

module.exports = app;