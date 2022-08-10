// 模板方法模式时一种典型的通过封装变化提高系统扩展性的设计模式。
// 运用了模板方法模式的程序中，子类方法种类和执行顺序都是不变的，但是子类的方法具体实现则是可变的。
// 父类是个模板，子类可以添加，就增加了不同的功能。子类和父类之间也就是"尧舜禹"之间的关系，属于同一类，没有血缘关系。
var Beverage=function(param){
    // 局部变量
    var boilWater=function(){
       console.log('把水煮沸');
    }
    // 配置
    var brew=param.brew||function(){
        throw new Error('必须传递brew方法');
    }
    var pourInCup=param.pourInCup||function(){
        throw new Error('必须传递pourInCup方法')
    }
    var addCondiments=param.addCondiments||function(){
        throw new Error('必须传递addCondiments方法')
    } 
    var F=function(){};//对象 类
    F.prototype.init=function(){
        boilWater();
        brew();
        pourInCup();
        addCondiments();
    };
    return F;
}
// 传对象
var Coffee=Beverage({
    brew:function(){
        console.log('用沸水泡咖啡');
    },
    pourInCup:function(){
        console.log('把咖啡倒进杯子');
    },
    addCondiments:function(){
        console.log('加糖和牛奶');
    }
})
var coffee=new Coffee(); 
coffee.init();