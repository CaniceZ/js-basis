// 通过代理的形式，将创建对象的操作和实例判断的操作进行解耦拆分，实现更小粒度的划分，符合”单一职责原则“； 
// 上面的代码中，ProxyCreateSingleton()只负责判断实例，Singlton只负责创建对象和赋值；
let ProxyCreateSingleton = (function(){
    let instance = null;
    return function(name){
        if(instance){
            return instance
        }
        return instance = new Singlton(name);
    }
})();

let Singlton = function(name){
    this.name = name;
} 

Singlton.prototype.getName = function(){
    console.log(this.name);
}

let winner = new ProxyCreateSingleton("winner");
console.log(winner.getName());
let sunner = new ProxyCreateSingleton("sunner");
console.log(sunner.getName());