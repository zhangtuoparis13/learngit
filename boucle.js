/**
 * Created by TBtuo on 01/04/16.
 */

//for循环的一个变体是for ... in循环，它可以把一个对象的所有属性依次循环出来：

var objet1 ={
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
var key;
for (key in objet1){
    alert(key);
}

//要过滤掉对象继承的属性，用hasOwnProperty()来实现：
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    if (o.hasOwnProperty(key)) {
        alert(key); // 'name', 'age', 'city'
    }
}

//由于Array也是对象，而它的每个元素的索引被视为对象的属性，因此，for ... in循环可以直接循环出Array的索引：

var a = ['A', 'B', 'C'];
for (var i in a) {
    alert(i); // '0', '1', '2'
    alert(a[i]); // 'A', 'B', 'C'
}