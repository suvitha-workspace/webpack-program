const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');


module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [          
          'style-loader',          
          'css-loader',         
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
    ]
  }
});
