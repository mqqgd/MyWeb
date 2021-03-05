//闭包
function test() {
    var arr = [];
    for (var i = 0; i < 10; i++) {

        (function (j) {
            arr[j] = function () {
                console.log(j);
            }

        }(i))
    }

    return arr;
}

//外部执行
var myArr = test();

for (var j = 0; j < 10; j++) {
    myArr[j]();  //会打出10个10
}


//改进：
function test() {
    var arr = [];
    for (var i = 0; i < 10; i++) {

        (function (j) {
            arr[j] = function () {
                console.log(j);
            }

        }(i))
    }

    return arr;
}

//外部执行
var myArr = test();

for (var j = 0; j < 10; j++) {
    myArr[j]();  //会打出0-9
}