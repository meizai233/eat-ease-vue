// 编译环境和线上环境之间的切换

let baseUrl = "";
let routerMode = "hash";
let imgBaseUrl = "";

if (process.env.NODE_ENV == "development") {
  imgBaseUrl = "/img/";
} else if (process.env.NODE_ENV == "production") {
  // 待办 这里修改成自己的网址
  baseUrl = "//elm.cangdu.org";
  imgBaseUrl = "//elm.cangdu.org/img/";
}

export { baseUrl, routerMode, imgBaseUrl };
