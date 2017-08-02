import path from 'path'

export default {
  devtool: 'source-map',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }]
  }
}
