// 函数闭包测试

var scope = "global scope";
function checkscope()
{
    var scope = "local scope";
    function f() {
        return scope;
    }
    // return f();
    return f;
}

var scoperesult = checkscope()();

console.log(scoperesult);