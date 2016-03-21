module.exports = {
  devServer: {
    contentBase: 'build/'
  },
  entry: "./src/app.js",
  output: {
      path: __dirname + '/build/',
      filename: "bundle.js",
  }
};
