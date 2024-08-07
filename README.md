## 技术栈

- webpack + babel(兼容 es6)
- vue2 + vuex + vue-router
- less
-

## 目标业务功能

- [x] IP 定位
- [x] 选择城市
- [x] 搜索地址
- [x] 展示商店
- [] 自定义指令-触底自动加载-loadMore

## 技术功能

- [] 触底加载组件-buttomDetector

## 开发亮点

- SSE event-source-polyfill
  - SSE 单向通道 服务器向客户端主动推送
  - EventSource
  - 【问题】用在了哪些主动推送服务上？有哪些协议或者特点呢
  - 【原理】
    - http1.1 默认开启长连接，请求头 Connection: keep-alive
