/*
* @Author: TBtuo
* @Date:   2016-03-30 13:45:39
* @Last Modified by:   TBtuo
* @Last Modified time: 2016-03-30 16:28:05
*/

'use strict';

// 数组的用法
// JavaScript的Array可以包含任意数据类型，并通过索引来访问每个元素。要取得Array的长度，直接访问length属性：
var arr = [1, 2, 3.14, 'Hello', null, true];
alert(arr.length);

var arr = [1,2,3];
alert(arr.length); // 3
arr.length = 6;
alert(arr); // arr变为[1, 2, 3, undefined, undefined, undefined]
arr.length =2;
alert(arr); // arr变为[1, 2]

/*Array可以通过索引把对应的元素修改为新的值，因此，对Array的索引进行赋值会直接修改这个Array : */
var arr = ['A', 'B', 'C'];
arr[1] = 99;
alert(arr); // arr现在变为['A', 99, 'C']

// 请注意，如果通过索引赋值时，索引超过了范围，同样会引起Array大小的变化：
var arr = [1, 2, 3];
arr[5] = 'x';
arr[6] = "y";
alert(arr);
//大多数其他编程语言不允许直接改变数组的大小，越界访问索引会报错。
//  然而，JavaScript的Array却不会有任何错误。在编写代码时，不建议直接修改Array的大小，访问索引时要确保索引不会越界

//与String类似，Array也可以通过indexOf()来搜索一个指定的元素的位置
var arr = [10, 20, '30', 'xyz'];
var a = arr.indexOf(10); // 元素10的索引为0
var b = arr.indexOf(20); // 元素20的索引为1
var c =arr.indexOf(30); // 元素30没有找到，返回-1
var d =arr.indexOf('30'); // 元素'30'的索引var
alert(a);
alert(b);
alert(c);
alert(d);

// slice()就是对应String的substring()版本，它截取Array的部分元素，然后返回一个新的Array：
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
alert(arr.slice(0, 3)); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
alert(arr.slice(3)); // 从索引3开始到结束: ['D', 'E', 'F', 'G']
// 注意到slice()的起止参数包括开始索引，不包括结束索引.

//如果不给slice()传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地复制一个Array：
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var aCopy = arr.slice();
alert(aCopy); // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
alert(aCopy === arr); // false
