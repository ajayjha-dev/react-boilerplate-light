const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CSS_MODULE_IDENT =
  process.env.NODE_ENV === 'production'
    ? '[name]_[hash:base64:5]'
    : '[local]--[hash:base64:5]';


module.exports = {
  entry: './app/app.js',
  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'build'),
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: CSS_MODULE_IDENT
              }
            }
          }
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'app/index.html'
    })
  ],
}
