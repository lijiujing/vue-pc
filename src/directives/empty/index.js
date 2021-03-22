import './index.css'
var timeout
export default {
    componentUpdated:function (el,binding) {
        let emptyDiv = document.createElement('div')
        emptyDiv.className = 'empty-tip'
        emptyDiv.innerHTML = '<img class="nodata-img" src="">' +
            '<p class="nodata-words">暂无数据</p>'
        let parentNode = el.parentNode
        let alreadyEmptyDiv = parentNode.querySelector('.empty-tip')
        if(binding.value && binding.value.length>0){
            clearTimeout(timeout)
            if(alreadyEmptyDiv){
                parentNode.removeChild(alreadyEmptyDiv)
            }
        }else{
            if(!alreadyEmptyDiv){
                clearTimeout(timeout)
                timeout = setTimeout(()=>{
                    parentNode.appendChild()
                },500)
            }
        }
    }
}
