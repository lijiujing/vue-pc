import http from "./http";

//登录
export const loginAjax = params =>{
    return http.post('api/v1/auth/login',params)
}
