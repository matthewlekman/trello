const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: [
      './assets/css/app.scss', // Use .scss or .sass as you prefer
      './assets/js/app.js'
    ]
  },
  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, 'priv/static'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/app.css'
    })
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  watch: process.env.NODE_ENV !== 'production'
};