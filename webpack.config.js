const P = require('monaco-editor-webpack-plugin');
const PatchedP = require('./patched-plugin/monaco-editor-webpack-plugin');
const path = require('path');

const dist = process.env.PATCH ? 'patched-dist' : 'dist';
const MonacoPlugin = process.env.PATCH ? PatchedP : P;


module.exports = {
  mode: 'development',
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, dist),
    filename: 'index.bundle.js',
  },
  plugins: [new MonacoPlugin({
    languages: ['typescript'],
  })],
};
