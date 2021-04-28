function fibonacci(n) {
    let arr = [1, 1];

    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n - 1];
}

var fib = function(n) {
    if (n > 1) {
        let res = fib(n - 1) + fib(n - 2);
        return res % 1000000007;
    } else {
        return n;
    }

};
// let a = fibonacci(5);
// console.log(a);

// 递归版
// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }

var fibonacci = function() {
    let arr = [0, 1];
    let fib = function(n) {
        if (arr[n] == undefined) {
            arr[n] = fib(n - 2) + fib(n - 1);
        }
        return arr[n];
    }
    return fib;
}()

console.log(fibonacci(3))