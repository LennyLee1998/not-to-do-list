 import axios from "axios"
import {BaseURL, Timeout} from "./config"

const instance = axios.create({
  baseURL: BaseURL,
  timeout: Timeout
})

export default function request(config) {
  // 在结果返回前进行一些额外的处理
  // 第一种写法是手动创建一个新的Promise对象来封装原始的Promise操作，然后在内部的Promise中调用instance(config)方法。这种写法可以额外定义一些操作逻辑，比如在请求前或请求后进行一些处理。
    return new Promise((resolve, reject) => {
      instance(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    }).catch(err => console.log(err))
  
  // 当在最内层的Promise中使用return关键字返回数据时，这个数据会被Promise.resolve()方法包裹成一个新的Promise对象并被传递给外层的Promise。因为在Promise中，任何非Promise值都会被自动包裹成Promise对象，这样就实现了在Promise链中数据的传递和处理。所以在最内层写return会使返回数据被包裹成Promise对象。
  // 第二种写法直接调用instance(config)方法，然后在后续的then和catch中处理请求的结果。这种写法相对简洁，但不能在请求前或请求后额外处理逻辑
  // return instance(config).then(res => {
  //   console.log("request success", res.data)
  //   return res.data
  // }).catch(err => {
  //   console.log(err)
  //   throw err
  // })
}

request.get = function(url, config) {
  return request({
    ...config,
    method: "get",
    url
  })
}

request.post = function(url, data, config ) {
  return request({
    ...config,
    method: "post",
    url,
    data
  })
}

request.delete = function(url, config) {
  return request({
    ...config,
    method: "delete",
    url,
  })
}

request.put = function(url, data, config) {
  return request({
    ...config,
    method: "put",
    data,
    url
  })
}