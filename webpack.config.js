// export this file
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry point of application
  entry: './client/index.js',

  output: {
    path: path.join(__dirname, '/client'),
    filename: 'bundle.js',
  },
  // headers: { 'Access-Control-Allow-Origin': '*' },
  devServer: {
  proxy: {
    '*': {
      target: 'http://localhost:8080/',
      secure: false,
    },
  },
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
    ],
  },
}

