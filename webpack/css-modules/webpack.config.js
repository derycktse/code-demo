const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"), // string
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&minimize']
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './app.css',
      allChunks: true
    })
  ],
  devServer: {

  }
}