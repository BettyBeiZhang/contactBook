const express = require('express');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackMiddleware = require('webpack-dev-middleware');
const router = require('./router');

const app = express();


app.use(express.static(__dirname +'/public'));
app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



router(app);

app.listen(8000, function() {
	console.log('Listening to port: 8000');
});
