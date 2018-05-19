const path = require("path");

module.exports = {
  entry: {
    entry: "./extension/index.js"
  },
  output: {
    path: path.resolve(__dirname, "extension"),
    filename: "build.js"
  },
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
