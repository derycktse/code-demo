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
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      },
    ]
  },
  plugins: [
    // {
    //   test: /\.css$/,
    //   use: ExtractTextPlugin.extract({
    //     fallback: 'style-loader',
    //     use: 'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"'
    //   }),
    // }
  ],
  devServer: {

  }
}