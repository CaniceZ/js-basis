// 节流-间隔时间内多次点击，只会按间隔时间触发

function throttle(fn,times = 300){
    let bool = true
    return function(){
        if(!bool){
           return false
      }
      setTimeout(()=>{
           bool = true
           fn.apply(this,arguments)
      },times)
  }
}
function a(x){
    return function(){
       console.log(x)
    }
  }
setInterval(throttle(a(1234),5000),2500)