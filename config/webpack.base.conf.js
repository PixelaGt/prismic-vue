/* eslint-disable */
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const outputFile = 'prismic-vue';
const globalName = 'prismic-vue';

const config = require('../package.json')
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      }
    },{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: ExtractTextPlugin.extract('css-loader'),
          sass: ExtractTextPlugin.extract('css-loader!sass-loader'),
          scss: ExtractTextPlugin.extract('css-loader!sass-loader'),
        },
      },
    }]
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new webpack.DefinePlugin({
     'VERSION': JSON.stringify(config.version),
    }),
    new ExtractTextPlugin(outputFile + '.css'),
    new VueLoaderPlugin()
  ]
}
