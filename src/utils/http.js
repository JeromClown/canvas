import request from './request'

const http ={
  get(url,params){
    const config = {
      method: 'get',
      url:url
    }
    if(params) config.params = params
    return request(config)
  },
  post(url,params,headers){
    const config = {
      method: 'post',
      url:url
    }
    if(params) config.data = params
    if (headers) {
      config.headers = {
        ...config.headers,
        ...headers
      };
    }
    return request(config)
  },
  put(url,params){
    const config = {
      method: 'put',
      url:url
    }
    if(params) config.params = params
    return request(config)
  },
  delete(url,params){
    const config = {
      method: 'delete',
      url:url
    }
    if(params) config.params = params
    return request(config)
  }
}
export default http
