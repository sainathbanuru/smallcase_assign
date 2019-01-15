const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const features = require("./data");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/env"] }
          },
          {
            loader: path.resolve("./customLoader"),
            // Here we define all the terms that we need to replace in our code. I chose a particular format like "%_(term)_%"
            // And we use the terms in that format in our code
            options: {
              terms: Object.keys(features).map(feature => `%_${feature}_%`)
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 8080,
    publicPath: "http://localhost:8080/dist/"
  },
  plugins: [new HtmlWebpackPlugin()]
};
