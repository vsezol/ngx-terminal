const webpack = require('webpack');

module.exports = {
  target: 'node',
  plugins: [
    // we should ignore some files because of shitty library
    new webpack.IgnorePlugin({
      resourceRegExp: /term.js/,
      contextRegExp: /blessed\/lib\/widgets$/,
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /pty.js/,
      contextRegExp: /blessed\/lib\/widgets$/,
    }),
  ],
};
