// 防抖 时间段内多次触发只执行最后一次
function debounce(fn, wait) {
    var timeout = null;
    return function() {
        let context = this, args = [...arguments];
        if(timeout !== null)  clearTimeout(timeout); 
        timeout = setTimeout(function(){
            fn.apply(context, args);
            timeout = null;            
        }, wait)    
    }
}
// 处理函数
function handle(x) {
    return function(){
        console.log(x); 
    }
    
}
// 滚动事件
window.addEventListener('scroll', debounce(handle(123), 1000));