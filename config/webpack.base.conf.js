/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const npmCfg = require('../package.json');
const projectRoot = path.resolve(__dirname, '../');

var banner = [
  'prismic-vue v' + npmCfg.version,
  '(c) ' + (new Date().getFullYear()) + ' ' + npmCfg.author,
  npmCfg.homepage
].join('\n')

module.exports = {
  entry: './src/',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'vue-prismic.js',
    library: 'vue-prismic',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        exclude: /node_modules/,
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel-loader'
    }
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ]
}
