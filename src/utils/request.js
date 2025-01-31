import axios from "axios";

let baseURL = "";
if(process.env.NODE_ENV === "development"){
  baseURL = "http://localhost:3000"
}else{
  baseURL = "123.com.cn"
}
//创建axios实例
const request = axios.create({
  timeout: 5000,
  baseURL:baseURL,
});

//所有请求设置了授权头信息【请求头中设置cookie信息，一直携带，判权】
// axios.defaults.headers.common['Authorization'] = `${cookie}`;
//这里是设置发送json格式参数
axios.defaults.headers.post['Content-Type'] = 'application/json';

// //请求拦截器
// request.interceptors.request.use(
//   //发送之前想要做些什么
//   config => {
//     // token是否过期，是否重新登陆等等
//     // 此处可修改一些基本数据
//     // config[baseURL,[data,[headers,[method,[timeout,[url]   等
//     //        基础地址,请求参数,头部, 请求方式, 超时,  请求地址  等
//
//     // config.headers.Cookie = "110110110110110110";
//     return config;
//   },
//   //方法返回一个带有拒绝原因的 Promise 对象。
//   error => Promise.reject(error)
// );
//
// //响应拦截器（对请求结束后进行一些操作，，例如:统一收集报错）
// request.interceptors.response.use(
//   //请求成功
//   res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
//   //请求失败
//   error => {
//     //可根据不同的状态去区分不同的错误，达到不同效果
//     if(error.response.status){
//       error.response.status === 404 ? alert("请求不存在！！") : alert("其他");
//     }
//     return Promise.reject(error);
//   }
// );

export default request
