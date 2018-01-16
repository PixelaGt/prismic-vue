/* eslint-disable */

const webpack = require('webpack')
const base = require('./webpack.base.conf')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


var config = Object.assign({}, base)

config.output.filename = 'vue-prismic.min.js'

config.plugins = (config.plugins || []).concat([
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    sourceMap: false
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
])

module.exports = config
