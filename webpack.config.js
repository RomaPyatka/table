const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')


const { NODE_ENV } = process.env
const isProd = NODE_ENV === 'production'
const isDev = NODE_ENV === 'dev'

module.exports = {
  mode: isProd ? 'production' : 'development',

  entry: {
    main: './src/app.jsx',
  },

  output: {
    path: path.resolve(__dirname, './build/'),
    publicPath: isProd ? './' : '/',
    filename: isProd ? 'static/js/[name].min.js' : 'static/js/[name].js',
    chunkFilename: isProd ? 'static/js/[id].min.js' : 'static/js/[id].js',
  },

  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },

  devtool: isDev ? 'source-map' : '',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      template: 'src/template.html',
      filename: 'index.html',
      minify: isProd ? {
        collapseWhitespace: true,
        removeComments: true,
        minifyJS: true,
        minifyCSS: true,
      } : false,
    }),
  ],

  optimization: {
    minimize: isProd,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: { ecma: 8 },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: { safari10: true },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        cache: true,
      }),
    ],
  },

  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': 'http://localhost:8888',
    },
    clientLogLevel: 'none',
  },
}
