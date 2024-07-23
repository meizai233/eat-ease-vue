## 技术栈

- webpack + babel(兼容 es6)
- vue2

## 开发亮点

- SSE event-source-polyfill
  - SSE 单向通道 服务器向客户端主动推送
  - EventSource
  - 【问题】用在了哪些主动推送服务上？有哪些协议或者特点呢
  - 【原理】
    - http1.1 默认开启长连接，请求头 Connection: keep-alive

## 开发难点
