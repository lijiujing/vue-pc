import axios from 'axios'
import Qs from 'qs'
const API = {
    development:'http://test.com/',
    test:'/',
    uat:'/',
    production:'/'
}
const http = {
    get:'',
    post:'',
}
const service = axios.create({
    baseURL:API[process.env.NODE_ENV],
    timeout:60000
})
export const CancelToken = axios.CancelToken
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 请求拦截器
service.interceptors.request.use(
    config=>{
        const token = window.localStorage.getItem('access_token')
        if(token){
            config.headers.common['Authorization'] = token
        }
        return config
    },
    error=>{
      return Promise.reject(error)
    }
)

service.interceptors.response.use(
    res => Promise.resolve(res).then(checkCode),
    error=> Promise.resolve(error.response).then(checkReject)
)
// 如果 返回的headers 里面带有 token ，就刷新token
const checkCode =  res=>{
    if(res.headers.authorization){
        window.localStorage.setItem('access_token',res.headers.authorization)
    }
    return  res.data
}

//错误状态码处理
const checkReject = res=>{
    switch (res.status) {
        case 401:{
            window.localStorage.removeItem('access_token')
            window.localStorage.removeItem('userInfo')
            MessageBox.alert('登录已经过期，请重新登录','登录过期',{
                confirmButtonText:'确定',
                callback:()=>{
                    location.href = '/'
                }
            })
            return Promise.reject(res.data)
        }
        default:{
            Message({
                message:res.data.message,
                type:'error',
                duration:3 * 1000
            })
            return Promise.reject(res.data)
        }
    }
}
http.get = function (url,params) {
    return new Promise((resolve, reject) => {
        service({
            method:'get',
            url,
            params
        }).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}
http.post = function (url,params) {
    return new Promise((resolve, reject) => {
        service({
            method:'post',
            url,
            data:Qs.stringify(params)
        }).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}
http.put = function (url,params) {
    return new Promise((resolve, reject) => {
        service({
            method:'put',
            url,
            data:Qs.stringify(params)
        }).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}
http.delete = function (url,params) {
    return new Promise((resolve, reject) => {
        service({
            method:'delete',
            url,
            data:Qs.stringify(params)
        }).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}
export default http
export const domain = API[process.env.NODE_ENV]
