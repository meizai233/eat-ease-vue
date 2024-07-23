const path = require("path");

module.exports = {
  // 生产环境
  build: {
    env: {
      NODE_ENV: "production",
    },
    index: path.resolve(__dirname, "../eat-ease/index.html"),
    assetsRoot: path.resolve(__dirname, "../eat-ease"),
    assetsPublicPath: "/elm/",
    assetsSubDirectory: "static",
  },
  dev: {
    env: {
      NODE_ENV: '"development"',
    },
    port: 8888,
    assetsPublicPath: "/",
    assetsSubDirectory: "static",
    context: [
      //代理路径
      "/shopping",
      "/ugc",
      "/v1",
      "/v2",
      "/v3",
      "/v4",
      "/bos",
      "/member",
      "/promotion",
      "/eus",
      "/payapi",
      "/img",
    ],
    // 先关闭 之后看情况开启
    cssSourceMap: false,
  },
};
