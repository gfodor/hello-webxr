const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  devtool: 'source-map',
  module: {
    rules: [
    {
      test: /\.m?js$/,
      include: /node_modules[\\\/]@mediapipe[\\\/]tasks-vision/,
      type: 'javascript/auto',
      use: [
        {
          loader: require.resolve('@open-wc/webpack-import-meta-loader'),
        },
        {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-syntax-import-meta',
              '@babel/plugin-proposal-optional-chaining',
              '@babel/plugin-proposal-nullish-coalescing-operator',
              '@babel/plugin-proposal-logical-assignment-operators',
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      ],
    },
    {
      test: /\.(js|mjs)$/,
      exclude: /(node_modules)/,
      use: [
        {
          loader: require.resolve('@open-wc/webpack-import-meta-loader'),
        },
        {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-syntax-import-meta',
              '@babel/plugin-proposal-optional-chaining',
              '@babel/plugin-proposal-nullish-coalescing-operator',
              '@babel/plugin-proposal-logical-assignment-operators',
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      ]
    }
  ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../lib/wasm/portal-pose'),
        to: 'portal-pose',
      },
    ]),
  ],
  watchOptions: {
    ignored: [/node_modules/],
  }
};
