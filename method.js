/**
 * Created by TBtuo on 01/04/16.
 */

/*
//在一个对象中绑定函数,称为这个函数的方法.
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};

// xiaoming.age; // function xiaoming.age()
alert(xiaoming.age()); // 今年调用是25,明年调用就变成26了
*/

/*
绑定到对象上的函数称为方法，
和普通函数也没啥区别，但是它在内部使用了一个this关键字，这个东东是什么？

在一个方法内部，this是一个特殊变量，它始终指向当前对象，
也就是xiaoming这个变量。所以，this.birth可以拿到xiaoming的birth属性。*/

/*

让我们拆开写：

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

xiaoming.age(); // 25, 正常结果
getAge(); // NaN
单独调用函数getAge()怎么返回了NaN？请注意，我们已经进入到了JavaScript的一个大坑里。

JavaScript的函数内部如果调用了this，那么这个this到底指向谁？

答案是，视情况而定！

如果以对象的方法形式调用，比如xiaoming.age()，该函数的this指向被调用的对象，也就是xiaoming，这是符合我们预期的。

如果单独调用函数，比如getAge()，此时，该函数的this指向全局对象，也就是window。

坑爹啊！*/


/*
更坑爹的是，如果这么写：

var fn = xiaoming.age; // 先拿到xiaoming的age函数
fn(); // NaN
也是不行的！要保证this指向正确，必须用obj.xxx()的形式调用！

由于这是一个巨大的设计错误，要想纠正可没那么简单。ECMA决定，
在strict模式下让函数的this指向undefined，因此，在strict模式下，你会得到一个错误：

'use strict';

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};

var fn = xiaoming.age;
fn(); // Uncaught TypeError: Cannot read property 'birth' of undefined
这个决定只是让错误及时暴露出来，并没有解决this应该指向的正确位置。*/

/*

有些时候，喜欢重构的你把方法重构了一下：

'use strict';

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - this.birth;
        }
        return getAgeFromBirth();
    }
};

xiaoming.age(); // Uncaught TypeError: Cannot read property 'birth' of undefined
结果又报错了！原因是this指针只在age方法的函数内指向xiaoming，
在函数内部定义的函数，this又指向undefined了！（在非strict模式下，它重新指向全局对象window！）*/


/*
修复的办法也不是没有，我们用一个that变量首先捕获this：

'use strict';

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var that = this; // 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // 用that而不是this
        }
        return getAgeFromBirth();
    }
};

xiaoming.age(); // 25
用var that = this;，你就可以放心地在方法内部定义其他函数，而不是把所有语句都堆到一个方法中。*/

/*
// 'use strict';
function getAge() {
    var y =new Date().getFullYear();
    return y-this.birth;
}

var xiaoming = {
    name : '小明',
    birth: 1990,
    age : getAge
};

alert(xiaoming.age());
alert(getAge.apply(xiaoming,[]));

apply

虽然在一个独立的函数调用中，根据是否是strict模式，this指向undefined或window，不过，我们还是可以控制this的指向的！

要指定函数的this指向哪个对象，可以用函数本身的apply方法，它接收两个参数，
第一个参数就是需要绑定的this变量，第二个参数是Array，表示函数本身的参数。

用apply修复getAge()调用：

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

xiaoming.age(); // 25
getAge.apply(xiaoming, []); // 25, this指向xiaoming, 参数为空*/
