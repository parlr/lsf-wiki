const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "build.js"
  },
  module: {
    rules: [
      { test: /\.vue$/, use: ["vue-loader"] },
      { test: /\.css$/, use: ["css-loader"] },
      { test: /\.js$/, use: ["babel-loader"] }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
