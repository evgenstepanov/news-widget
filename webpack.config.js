const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      root: __dirname,
      verbose: true,
      dry: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname + '/src/index.html'),
        },
        {
          from: path.join(__dirname + '/src/css/main.css'),
        },
      ],
    }),
  ],
};
