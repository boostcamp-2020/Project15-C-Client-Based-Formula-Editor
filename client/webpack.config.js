const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => ({
  mode: argv.mode,
  entry: {
    main: './src/index.tsx',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_module/,
      },
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.png|jpg|gif|svg$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]?[hash]',
          limit: 100,
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@ingredients': path.resolve(__dirname, 'src/components/Ingredients'),
      '@meal': path.resolve(__dirname, 'src/components/Meal'),
      '@set': path.resolve(__dirname, 'src/components/Set'),
      '@apis': path.resolve(__dirname, 'src/lib/apis'),
      '@constants': path.resolve(__dirname, 'src/lib/constants'),
      '@utils': path.resolve(__dirname, 'src/lib/utils'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@lib': path.resolve(__dirname, 'src/lib'),
      '@test': path.resolve(__dirname, 'src/__test__'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: './public/background.js', to: './' },
        { from: './public/manifest.json', to: './' },
        { from: './public/icon.png', to: './' },
        { from: './public/content.css', to: './' },
        { from: './public/image', to: './image' },
      ],
    }),
  ],
  optimization: {},

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    host: 'localhost',
    overlay: true,
    port: 8080,
    hot: true,
    stats: 'errors-only',
    historyApiFallback: true,
  },
});
