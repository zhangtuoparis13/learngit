/**
 * Created by TBtuo on 01/04/16.
 */

/*装饰器

利用apply()，我们还可以动态改变函数的行为。

JavaScript的所有对象都是动态的，即使内置的函数，我们也可以重新指向新的函数。

现在假定我们想统计一下代码一共调用了多少次parseInt()，
可以把所有的调用都找出来，然后手动加上count += 1，不过这样做太傻了。
最佳方案是用我们自己的函数替换掉默认的parseInt()：*/

var count = 0;
var oldParseInt = parseInt; // 保存原函数

window.parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数
};

// 测试:
parseInt('10');
parseInt('20');
parseInt('30');
alert(count); // 3