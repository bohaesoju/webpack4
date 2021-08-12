const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development', 
  entry : {
    main: './src/app.js'
  }, 
  output: {
    path: path.resolve('./dist'), 
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          publicPath: './dist/',
          name: '[name].[ext]?[hash]',
          limit: 20000, //2kb
        },
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `
        Build date: ${new Date().toLocaleString()}
      `
    })
  ]
}  