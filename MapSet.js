/**
 * Created by TBtuo on 01/04/16.
 */

/*JavaScript的默认对象表示方式{}可以视为其他语言中的Map或Dictionary的数据结构，即一组键值对。

 但是JavaScript的对象有个小问题，就是键必须是字符串。但实际上Number或者其他数据类型作为键也是非常合理的。

 为了解决这个问题，最新的ES6规范引入了新的数据类型Map。要测试你的浏览器是否支持ES6规范，请执行以下代码，
 如果浏览器报ReferenceError错误，那么你需要换一个支持ES6的浏览器：
* */

/*
*Map是一组键值对的结构，具有极快的查找速度,如果用Map实现，
* 只需要一个“名字”-“成绩”的对照表，直接根据名字查找成绩，无论这个表有多大，查找速度都不会变慢 */

// 初始化Map需要一个二维数组，或者直接初始化一个空Map。Map具有以下方法:

var m = new Map(); // 空Map 假如在5.1当中使用 Map 就无法识别
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined

alert(m.has('Adam'));
alert(m.has('Bob'));

//由于一个key只能对应一个value，所以，多次对一个key放入value，后面的值会把前面的值冲掉：
m.set('Adam', 67);
m.set('Adam', 88);
alert(m.get("Adam")); // 88


/* Set
* Set和Map类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key。*/
// 要创建一个Set，需要提供一个Array作为输入，或者直接创建一个空Set：
var s1 = new Set(); // 空Set
var s2 = new Set([1, 2, 3]); // 含1, 2, 3

// 重复元素在Set中自动被过滤：
var s = new Set([1, 2, 3, 3, '3']);
// s; // Set {1, 2, 3, "3"}
for (var x of s){
    alert(x);
}

// 用for ... of循环遍历集合，用法如下
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // 遍历Array
    alert(x);
}
for (var x of s) { // 遍历Set
    alert(x);
}
for (var x of m) { // 遍历Map
    alert(x[1] + '=' + x[0]);
}
/*
*你可能会有疑问，for ... of循环和for ... in循环有何区别？

 for ... in循环由于历史遗留问题
 ，它遍历的实际上是对象的属性名称。一个Array数组实际上也是一个对象，它的每个元素的索引被视为一个属性。 */

//然而 更好的方式是直接使用 iterable 内置的 forEach 方法 ,它接收一个函数,每次迭代就自动回调该函数 以 Array 为例:
var a = ['A','B','C'];
a.forEach(function (elment,index,array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    alert(elment);
    alert(index);
    alert(array);
});

//注意，forEach()方法是ES5.1标准引入的，你需要测试浏览器是否支持。

// Set与Array类似，但Set没有索引，因此回调函数的前两个参数都是元素本身：
var s = new Set(['A', 'B', 'C']);
s.forEach(function (element, sameElement, set) {
    alert(element);
    alert(sameElement)
});

// Map的回调函数参数依次为value、key和map本身：

var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map) {
    alert(value);
});

// 如果对某些参数不感兴趣，由于JavaScript的函数调用不要求参数必须一致，
// 因此可以忽略它们。例如，只需要获得Array的element：

var a = ['A', 'B', 'C'];
a.forEach(function (element) {
    alert(element);
});