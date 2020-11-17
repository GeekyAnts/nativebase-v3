// web/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const webpack = require('webpack');

const appDirectory = path.resolve(__dirname, '../');

// This is needed for webpack to compile JavaScript.
// Many OSS React Native packages are not compiled to ES5 before being
// published. If you depend on uncompiled packages they may cause webpack build
// errors. To fix this webpack can be configured to compile to the necessary
// `node_module`.
const babelLoaderConfiguration = {
  test: /\.(tsx|ts|jsx|js|mjs)$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(appDirectory, 'index.web.js'),
    path.resolve(appDirectory, 'src'),
    path.resolve(appDirectory, 'node_modules/react-native-uncompiled'),
    path.resolve(appDirectory, 'node_modules/@emotion'),
    path.resolve(appDirectory, 'node_modules/@storybook'),
    path.resolve(
      appDirectory,
      'node_modules/react-native-modal-datetime-picker'
    ),
    path.resolve(appDirectory, 'node_modules/react-native-swipe-gestures'),
    path.resolve(appDirectory, 'node_modules/react-native-modal-selector'),
    path.resolve(appDirectory, 'node_modules/react-native-animatable'),
    path.resolve(appDirectory, '../src'),
    path.resolve(appDirectory, '../node_modules/react-native-vector-icons/'),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // The 'metro-react-native-babel-preset' preset is recommended to match React Native's packager
      presets: ['module:metro-react-native-babel-preset'],
      // Re-write paths to import only the modules needed by the app
      plugins: ['react-native-web'],
    },
  },
};
const tsLoaderConfiguration = {
  test: /\.(tsx|ts|jsx|js|mjs)$/,
  exclude: /node_modules/,
  loader: 'ts-loader',
};
// This is needed for webpack to import static images in JavaScript files.
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};

module.exports = {
  entry: [
    // load any web API polyfills
    // path.resolve(appDirectory, 'polyfills-web.js'),
    // your web-specific entry file
    path.resolve(appDirectory, './index.web.js'),
  ],

  // configures where the build ends up
  output: {
    filename: 'bundle.web.js',
    path: path.resolve(appDirectory, 'dist'),
  },

  // ...the rest of your config

  module: {
    rules: [babelLoaderConfiguration, imageLoaderConfiguration],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  resolve: {
    // This will only alias the exact import "react-native"
    alias: {
      'react-native$': 'react-native-web',
    },
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.tsx',
      '.ts',
      '.web.jsx',
      '.web.js',
      '.jsx',
      '.js',
    ],
  },
};

// const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const rootDir = path.join(__dirname, '..');
// const webpackEnv = process.env.NODE_ENV || 'development';

// module.exports = {
//   mode: webpackEnv,
//   entry: {
//     app: path.join(rootDir, './index.web.js'),
//   },
//   output: {
//     path: path.resolve(rootDir, 'dist'),
//     filename: 'app-[hash].bundle.js',
//   },
//   devtool: 'source-map',
//   module: {
//     rules: [
//       {
//         test: /\.(tsx|ts|jsx|js|mjs)$/,
//         exclude: /node_modules/,
//         loader: 'ts-loader',
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, './index.html'),
//     }),
//     new webpack.HotModuleReplacementPlugin(),
//   ],
//   resolve: {
//     extensions: [
//       '.web.tsx',
//       '.web.ts',
//       '.tsx',
//       '.ts',
//       '.web.jsx',
//       '.web.js',
//       '.jsx',
//       '.js',
//     ], // read files in fillowing order
//     alias: Object.assign({
//       'react-native$': 'react-native-web',
//     }),
//   },
// };
