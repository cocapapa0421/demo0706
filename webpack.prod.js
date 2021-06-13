const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  entry: {
    app: path.resolve(__dirname, "./src/app.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name].bundle.js",
    publicPath: "/",
  },
  mode: "production",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "./src"),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          "css-loader",
          "resolve-url-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: "webpack-import-glob-loader",
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.pug$/,
        use: ["pug-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.pug",
      inject: true,
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "images", to: "images" }],
    }),
    new MiniCSSExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
    runtimeChunk: {
      name: "runtime",
    },
  },
};
