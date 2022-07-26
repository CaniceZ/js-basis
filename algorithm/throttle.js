// 节流-间隔时间内多次点击，只会按间隔时间触发

// function throttle(fn,times = 300){
//     let bool = true
//     return function(){
//         if(!bool){
//            return false
//       }
//       setTimeout(()=>{
//            bool = true
//            fn.apply(this,arguments)
//       },times)
//   }
// }
// 时间戳版
// function throttle(func, wait){
//     let previous = 0;
//     return function(){
//         let now = Date.now(), context = this, args = [...arguments];
//         if(now - previous > wait){
//             func.apply(context, args);
//             previous = now; // 闭包，记录本次执行时间戳      
//         }    
//     }        
// }

// 定时器版
function throttle(func, wait){
    let timer = null;
    return function(){
        let context = this, args = [...arguments];
        if(timer) return;
        timer = setTimeout(function(){
            func.apply(context, args);
            timer = null;            
        }, wait)    
    }
}

function a(x){
    return function(){
       console.log(x)
    }
  }
setInterval(throttle(a(1234),5000),2500)