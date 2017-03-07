var webpack = require('webpack')
module.exports = {
  entry: './index.js',

  output: {
    path: 'dist',
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: "jquery",
        "window.jQuery": "jquery"
    })
  ] : [],

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=81920' },
      { test: /\.css$/,loaders:['style','css']},
    ]
  }
}
