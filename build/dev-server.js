var config = require("../config");
// 默认为开发环境
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);

var path = require("path");
var express = require("express");
var webpack = require("webpack");
var webpackConfig = require("./webpack.dev.conf");
var proxyMiddleware = require("http-proxy-middleware");
var opn = require("opn");

// 默认端口
var port = process.env.PORT || config.dev.port;

// 待办 这是在干嘛
var server = express();
var compiler = webpack(webpackConfig);

var devMiddleware = require("webpack-dev-middleware")(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false,
  },
});

var hotMiddleware = require("webpack-hot-middleware")(compiler);
// force page reload when html-webpack-plugin template changes
compiler.plugin("compilation", function (compilation) {
  compilation.plugin("html-webpack-plugin-after-emit", function (data, cb) {
    hotMiddleware.publish({
      action: "reload",
    });
    cb();
  });
});

var context = config.dev.context;

switch (process.env.NODE_ENV) {
  case "local":
    var proxypath = "http://127.0.0.1:3000";
    break;
  // 待办 修改名称 部署
  case "online":
    var proxypath = "http://47.121.207.171:3000";
    break;
  default:
    var proxypath = config.dev.proxypath;
}

var options = {
  target: proxypath,
  changeOrigin: true,
};

if (context.length) {
  server.use(proxyMiddleware(context, options));
}

server.use(require("connect-history-api-fallback")());

// serve webpack bundle output
server.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
server.use(hotMiddleware);

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
server.use(staticPath, express.static("./static"));

module.exports = server.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  var uri = "http://localhost:" + port;
  console.log("Listening at " + uri + "\n");

  // when env is testing, don't need open it
  if (process.env.NODE_ENV !== "testing") {
    opn(uri);
  }
});
