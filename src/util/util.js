import dayjs from 'dayjs'
// 格式化日期
export function formatTime(data,format="YYYY年MM月DD日") {
    if(data){
        return dayjs(data).format(format)
    }else {
        return  '时间未定义'
    }
}

// 把秒转化为 时 分秒
export function formatSeconds(value=0) {
    var secondTime = parseInt(value)
    var minuteTime = 0
    var hourTime = 0
    if(secondTime>60){
        minuteTime = parseInt(secondTime / 60)
        secondTime = parseInt(secondTime % 60)
        if(minuteTime>60){
            hourTime = parseInt(minuteTime/60)
            minuteTime = parseInt(minuteTime%60)
        }
    }
    if(hourTime<10){
        hourTime = '0'+hourTime
    }
    if(minuteTime<10){
        minuteTime = '0'+minuteTime
    }
    if(secondTime<10){
        secondTime = '0'+secondTime
    }
    return hourTime + ':' + minuteTime + ':' + secondTime
}

// js 获取 URL 参数
export function getQueryVariable(value) {
    var query = window.location.search.substring(1)
    var vars = query.split('&')
    for(var i=0;i<vars.length;i++){
        var pair = vars[i].split('=')
        if(pair[0]==value){
            return pair[1]
        }
    }
    return false
}
