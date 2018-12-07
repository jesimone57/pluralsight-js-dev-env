import webpack from 'webpack';
import path from 'path';

export default {
  devtool: 'source-map',
  entry: [path.resolve(__dirname, 'src/index')],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  mode: 'production',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: false,
      noInfo: true
    })

    // Elimintate duplicate packages when generating bundle
    // new webpack.optimize.DedupePlugin(),

    // minify JS
    //new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
    ]
  }
};
