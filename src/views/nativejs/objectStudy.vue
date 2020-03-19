<template>
  <div class>
    <div>vue面向对象的学习</div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  methods: {}
};

// 面向对象的学习
// 1、面向对象是一种编程思想
// 2、和面向过程区别很大，面向过程是关注过程里的每一步
// 3、面向对象是利用对象帮我们做事，不需要关注过程
// 4、面向对象有一个类的概念
// 5、严格来说js不是面向对象语言，所有的类都是派生自现有对象的副本

// 是用构造函数来模拟面向对象编程
// 通过构造函数可以创建多个实例
function Study(name, age) {
  this.name = name;
  this.age = age;
  this.saihai = function() {
    console.log("我叫" + this.name);
  };
}

// 每个实例都有一个constructor函数指向构造函数;

// 不过构造函数有个缺点,如果构造函数里有方法，则每个实例都会创建一次
// 往往方法的左右都一样，只是参数不一样，如果这样创建的话，浪费内存

let std1 = new Study("李四", 20);
// console.log(std1);
std1.saihai();

// 通过原型创建实例
// 每个构造函数都有一个prototype属性，该属性指向原型对象
// 每个构造函数的原型对象都有一个coustructor属性指向该原型对象所在构造函数的指针 v八八八八八八八v

function Person() {}

Person.prototype.name = "大人";
Person.prototype.age = "22";
Person.prototype.sayName = function() {
  console.log(this.name);
};

let p1 = new Person();
// console.log(p1.name);
p1.name = "李四";
// let p1Name=p1.name;
// 当调用构造函数创建一个新实例的时候，该实例内部将包含一个指针(内存地址)，指向构造函数的原型对象，默认使不可见的
// 不过连接是存在于实例和原型之间，而不是和构造函数之间
// 不过在实现中我们无法访问实例的原型属性  //不过可以通过方法来确认对象之间是否存在这种关系
// 通过getPrototypeOf()方法来判断实例的原型对象和构造函数的原型对象是不是一个对象

// constructor属性是共享的通过实例也能访问到。
// console.log(Object.getPrototypeOf(p1));

// 通过hasOwnproperty()可以判断一个属性是否存在于当前实例上，如果存在返回true

// 不过hasOwnproperty返回false的时候会发生两种情况，1是属性存在于原型，2、二是不存在

// console.log(p1.hasOwnProperty('age'));

// 通过in操作符无论是实例还是对象都返回true
// 不存在的属性返回false
console.log("name" in p1);

// 通过hasOwnproperty 和in共同使用就可以判断属性存在于哪里

// function propertyIf(obj, name) {
//     if(obj.hasOwnProperty(name)){
//         return '实例中存在'
//     }else if(name in obj){
//         return '原型中存在'
//     }else{
//         return '属性不存在'
//     }
// }

// var res=propertyIf(p1,'age');
// console.log(res);

// 要取得对象上所有可枚举(存在)的实例属性，可以使用object.keys();方法
var kesList=Object.keys(Person.prototype);
console.log(kesList);

// 组合使用构造函数模式和原型模式  (经典继承模式)
// 用构造函数定义实例属性 ，用原型定义共享的属性和方法；
// 集合二者之长
// 借用构造函数通过子类型的构造函数调用超类型的构造函数
// 借用构造函数的特点是子类可以向超类的构造函数中传递参数  
// 缺点是方法都在构造函数里定义，方法的复用无从谈起

// 使用原型和借用构造函数的方法实现组合继承(伪经典继承)
// 避免了原型和借用构造函数的缺点，结合了他们的优点

// 递归实现阶乘

// function factorial(num){
//     if(num<=1){
//         return 1;
//     }else{
//        return num* factorial(num-1);
//     }
// }   

// var num1=factorial(4);
// console.log(num1);  


</script>

<style>
</style>
