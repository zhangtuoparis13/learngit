/**
 * Created by TBtuo on 01/04/16.
 */
/*
* 基本上所有的高级语言都支持函数，JavaScript也不例外。
* JavaScript的函数不但是“头等公民”，而且可以像变量一样使用，具有非常强大的抽象能力。*/

/*定义函数

 在JavaScript中，定义函数的方式如下：

 function abs(x) {
 if (x >= 0) {
 return x;
 } else {
 return -x;
 }
 }
 上述abs()函数的定义如下：

 function指出这是一个函数定义；
 abs是函数的名称；
 (x)括号内列出函数的参数，多个参数以,分隔；
 { ... }之间的代码是函数体，可以包含若干语句，甚至可以没有任何语句。
 请注意，函数体内部的语句在执行时，一旦执行到return时，函数就执行完毕，并将结果返回。因此，函数内部通过条件判断和循环可以实现非常复杂的逻辑。

 如果没有return语句，函数执行完毕后也会返回结果，只是结果为undefined。

 由于JavaScript的函数也是一个对象，上述定义的abs()函数实际上是一个函数对象，而函数名abs可以视为指向该函数的变量。

 因此，第二种定义函数的方式如下：

 var abs = function (x) {
 if (x >= 0) {
 return x;
 } else {
 return -x;
 }
 };
 在这种方式下，function (x) { ... }是一个匿名函数，它没有函数名。但是，这个匿名函数赋值给了变量abs，所以，通过变量abs就可以调用该函数。

 上述两种定义完全等价，注意第二种方式按照完整语法需要在函数体末尾加一个;，表示赋值语句结束。
* */
var abs = function (x) {
    if (x>=0){
        var y = x;
    } else {
        y = -x;
    }
    return y;

};

console.log(abs(-11));

// 由于JavaScript允许传入任意个参数而不影响调用，因此传入的参数比定义的参数多也没有问题，虽然函数内部并不需要这些参数：

abs(10, 'blablabla'); // 返回10
abs(-9, 'haha', 'hehe', null); // 返回9

// 传入的参数比定义的少也没有问题：

abs(); // 返回NaN
// 此时abs(x)函数的参数x将收到undefined，计算结果为NaN

// 要避免收到undefined，可以对参数进行检查：

function abs1(x) {
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

/*
全局作用域

不在任何函数内定义的变量就具有全局作用域。实际上，JavaScript默认有一个全局对象window，全局作用域的变量实际上被绑定到window的一个属性：

'use strict';

var course = 'Learn JavaScript';
alert(course); // 'Learn JavaScript'
alert(window.course); // 'Learn JavaScript'
因此，直接访问全局变量course和访问window.course是完全一样的。*/

/*
* 这说明JavaScript实际上只有一个全局作用域。任何变量（函数也视为变量）
* ，如果没有在当前函数作用域中找到，就会继续往上查找，最后如果在全局作用域中也没有找到，则报ReferenceError错误。*/

/*
名字空间

全局变量会绑定到window上，不同的JavaScript文件如果使用了相同的全局变量，或者定义了相同名字的顶层函数，都会造成命名冲突，并且很难被发现。

减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中。例如：

// 唯一的全局变量MYAPP:
var MYAPP = {};

// 其他变量:
MYAPP.name = 'myapp';
MYAPP.version = 1.0;

// 其他函数:
MYAPP.foo = function () {
    return 'foo';
};
把自己的代码全部放入唯一的名字空间MYAPP中，会大大减少全局变量冲突的可能。

许多著名的JavaScript库都是这么干的：jQuery，YUI，underscore等等。*/

/*局部作用域

由于JavaScript的变量作用域实际上是函数内部，我们在for循环等语句块中是无法定义具有局部作用域的变量的：

'use strict';

function foo() {
    for (var i=0; i<100; i++) {
        //
    }
    i += 100; // 仍然可以引用变量i
}
为了解决块级作用域，ES6引入了新的关键字let，用let替代var可以申明一个块级作用域的变量：

'use strict';

function foo() {
    var sum = 0;
    for (let i=0; i<100; i++) {
        sum += i;
    }
    i += 1; // SyntaxError
}*/

/*
常量

由于var和let申明的是变量，如果要申明一个常量，在ES6之前是不行的，
我们通常用全部大写的变量来表示“这是一个常量，不要修改它的值”：

var PI = 3.14;
ES6标准引入了新的关键字const来定义常量，const与let都具有块级作用域：

'use strict';

const PI = 3.14;
PI = 3; // 某些浏览器不报错，但是无效果！
PI; // 3.14*/
