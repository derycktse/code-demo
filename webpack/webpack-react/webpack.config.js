const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    // compress: true,
    port: 9000,
    // hot: true
  }
}