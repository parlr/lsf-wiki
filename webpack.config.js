const path = require("path");
const os = require("os");
const webExt = require("webpack-webext-plugin");

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
  },
  plugins: [
    new webExt({
      runOnce: true,
      maxRetries: 3,
      argv: [
        "run",
        "--keep-profile-changes",
        "--firefox-profile",
        `${os.homedir()}/.mozilla/firefox/tdvepdjn.test/`,
        "--start-url",
        "https://fr.wikipedia.org/wiki/LSF"
      ]
    })
  ]
};
