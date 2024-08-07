import App from "src/App";

// import动态导入在es2020提案 es6不支持
// import("src/page/home/home").then((res) => {
//   console.log("res", res);
//   home = res;
// });

// 待办 为什么这个用不了
// async function getRoutes() {
//   const routes = [];
//   routes[home] = await import("../page/home/home");

//   return routes;
// }
// getRoutes();

// require.ensure的原理就是把一些js模块给独立出一个个js文件，然后需要用到的时候，在创建一个script对象，加入到document.head对象中即可，浏览器会自动帮我们发起请求，去请求这个js文件，在写个回调，去定义得到这个js文件后，需要做什么业务逻辑操作。
const home = (r) => require.ensure([], () => r(require("page/home/home")), "home");
const city = (r) => require.ensure([], () => r(require("page/city/city")), "city");
const msite = (r) => require.ensure([], () => r(require("page/msite/msite")), "msite");

// RouterConfig
export default [
  {
    path: "/",
    component: App, //顶层路由，对应index.html ???????why
    children: [
      //地址为空时跳转home页面
      {
        path: "",
        redirect: "/home",
      },
      //首页城市列表页
      {
        path: "/home",
        component: home,
      },
      //当前选择城市页
      {
        path: "/city/:cityid",
        component: city,
      },
      //所有商铺列表页
      {
        path: "/msite",
        component: msite,
        meta: { keepAlive: true },
      },
    ],
  },
];
