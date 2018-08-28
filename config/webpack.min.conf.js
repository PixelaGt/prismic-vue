const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.conf')
const path = require('path')

const outputFile = 'prismic-vue';
const globalName = 'prismic-vue';

module.exports = merge(base, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: outputFile + '.min.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  externals: {
    vue: 'vue',
    'prismic-dom': 'prismic-dom',
    'prismic-javascript': 'prismic-javascript',
  },
  optimization: {
    minimize: false
  }
})
