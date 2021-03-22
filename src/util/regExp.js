// 验证手机号
export const regPhone = {
    tips:'请输入正确的手机号',
    fn:(value)=>{
        var reg = /^1[345789]\d{9}$/
        if(reg.test(value)){
            return true
        }else {
            return false
        }
    }
}
// 验证6位数字密码
export const regPhone = {
    tips:'请输入6位数字密码',
    fn:(value)=>{
        var reg = /^\d{6}$/
        if(reg.test(value)){
            return true
        }else {
            return false
        }
    }
}
// 验证密码
export const regPhone = {
    tips:'密码需8-16位数字、字母组合',
    fn:(value)=>{
        var reg = /^[a-zA-Z0-9]{8,16}$/
        if(reg.test(value)){
            return true
        }else {
            return false
        }
    }
}

// 验证短信验证码
export const regPhone = {
    tips:'请输入正确的手机验证码',
    fn:(value)=>{
        if(value && value.length === 6){
            return true
        }else {
            return false
        }
    }
}

// 验证 网址
export const regPhone = {
    tips:'请输入真确的网址 或者域名',
    fn:(value)=>{
        var reg = /\./
        if(reg.test(value)){
            return true
        }else {
            return false
        }
    }
}
