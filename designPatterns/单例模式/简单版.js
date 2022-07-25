
// 上面代码中我们是通过一个变量instance的值来进行判断是否已存在实例，如果存在就直接返回this.instance，如果不存在，就新建实例并赋值给instance；
// 但是上面的代码还是存在问题，因为创建对象的操作和判断实例的操作耦合在一起，并不符合”单一职责原则“；
let Singleton = function(name){
    this.name = name;
    this.instance = null; 
}

Singleton.prototype.getName = function(){
    console.log(this.name);
}

Singleton.getInstance = function(name){
    if(this.instance){
        return this.instance; 
    }
    return this.instance = new Singleton(name);
}

let winner = Singleton.getInstance("winner");   //winner
console.log(winner.getName());
let sunner = Singleton.getInstance("sunner");   //winner
console.log(sunner.getName())