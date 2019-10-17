const path = require("path");
const markdownPlugin = require('markdown-html-webpack-plugin');

var config = {
  entry: {
    app: "./js/scripts.js"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
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
    new markdownPlugin({
        filePath: '../docs/md',
        exportPath: '../docs/html/',
        isEncodeName: false, // if need to encode file name, like chinese
        template: '../docs/template.html'
      }),
  ]
};
module.exports = (env, argv) => {
  if (argv.mode != "production") {
    config.devtool = "inline-source-map";
  }
  return config;
};
