const path = require('path');
const bundleFolder = path.join(__dirname, 'public', 'js');

module.exports = {
  entry: {
    app: ['./src/index.js']
  },
  output: {
    filename: 'bundle.js',
    path: bundleFolder,
    publicPath: '/js/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    stats: 'errors-only'
  }
};
