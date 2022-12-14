// export this file
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry point of application
  entry: './client/index.js',

  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  // headers: { 'Access-Control-Allow-Origin': '*' },
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:4000/',
      },
    },
    historyApiFallback: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './client/html/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [require('autoprefixer')],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
