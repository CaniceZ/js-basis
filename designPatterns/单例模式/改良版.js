// 思路：通过一个闭包，来实现判断实例的操作；
let CreateSingleton = (function(){
    let instance = null;
    return function(name){
        this.name = name;
        if(instance){
            return instance
        }
        return instance = this;
    }
})()

CreateSingleton.prototype.getName = function(){
        console.log(this.name);
}

let winner = new CreateSingleton("winner");  //winner
console.log(winner.getName());
let sunner = new CreateSingleton("sunner");  //winner
console.log(sunner.getName())