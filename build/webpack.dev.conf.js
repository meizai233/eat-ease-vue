// 合并base conf
var config = require("../config");
var webpack = require("webpack");
var merge = require("webpack-merge");
var utils = require("./utils");
var baseWebpackConfig = require("./webpack.base.conf");
var HtmlWebpackPlugin = require("html-webpack-plugin");

// 多个入口
// 一个client 一个server？
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ["./build/dev-client"].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap,
    }),
  },
  devtool: "#eval-source-map",
  plugins: [
    // 创建一个在编译时可配置的全局常量
    new webpack.DefinePlugin({
      "process.env": config.dev.env,
    }),
    // 待办 这是干嘛的
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // 在构建过程中自动创建一个 HTML 文件，你可以通过配置指定模板和输出路径
    // template为 当前项目根目录下的index
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      favicon: "favicon.ico",
      inject: true,
    }),
  ],
});
