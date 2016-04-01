/**
 * Created by TBtuo on 01/04/16.
 */

// JavaScript的对象是一种无序的集合数据类型，它由若干键值对组成。

// JavaScript的对象用于描述现实世界中的某个对象。例如，为了描述“小明”这个淘气的小朋友，我们可以用若干键值对来描述他：

var xiaoming = {
    name : 'XiaoMing',
    birth : 1990,
    school : 'university Paris 13',
    height : 1.70,
    weight : 65,
    score : null
};
// object.prop
alert(xiaoming.name);
alert(xiaoming.birth);
alert(xiaoming.age); //在这里浏览器不会报错 只会输出一个undefind

//由于js的对象是动态类型,你可以自由的给一个对象添加或删除属性
xiaoming.age=18;
alert(xiaoming.age); // 此时输出18
delete xiaoming.age; //删除age属性
alert(xiaoming.age); // undefined

//如果我们要检测xiaoming是否拥有某一属性,可以用in操作符
alert('name' in xiaoming);
alert('grade' in xiaoming);

//不过要小心，如果in判断一个属性存在，这个属性不一定是xiaoming的，它可能是xiaoming继承得到的

alert('toString' in xiaoming); // true
//因为toString定义在object对象中，而所有对象最终都会在原型链上指向object，所以xiaoming也拥有toString属性。

//要判断一个属性是否是xiaoming自身拥有的，而不是继承得到的，可以用hasOwnProperty()方法

alert(xiaoming.hasOwnProperty('name')); //true
alert(xiaoming.hasOwnProperty('toString')); // false

//以上为 js 的对象部分的基本语法