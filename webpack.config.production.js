const webpack = require('webpack')
const _ = require('lodash')

const webpackConfig = require('./webpack.config.base')

module.exports = _.merge(webpackConfig, {
  plugins: _.union(webpackConfig.plugins, [
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }),
  ]),
})
