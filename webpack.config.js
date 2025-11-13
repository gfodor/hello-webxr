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
  plugins: [],
  watchOptions: {
    ignored: [/node_modules/],
  }
};
