const webpack = require('webpack');
const path = require('path');



const config = {
entry:
	path.resolve(__dirname, 'client') + '/main.js',

output: {
	path: path.resolve(__dirname, 'public'),
  filename: 'bundle.js'
},

module: {
	loaders: [
	{
		test: /\.jsx?/,
		include: path.resolve(__dirname, 'client'),
		loader:  'babel-loader'
	}
	]
}

};


module.exports = config;
