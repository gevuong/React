var path = require('path');

module.exports = {
  entry: "./entry.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets'),
    filename: "bundle.js"
  },
  // module? loaders?
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  // resolve key specifies what file extensions to process without explicitly naming them.
  resolve: {
    extensions: ['.js', '.jsx', '*']
    // '*' star matcher to include files with explicit extension. Otherwise webpack will look for file_name.js.js
  },
  devtool: 'source-map',
  // source map enables you to see line numbers of source code when errors are raised.
};
