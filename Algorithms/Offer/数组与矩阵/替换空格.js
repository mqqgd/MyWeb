/* 
问题：
    请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

示例 1：
输入：s = "We are happy."
输出："We%20are%20happy."

*/

// 解法1
var repalceSpace = function(s) {
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] == " ") {
            res += "%20"
        } else {
            res += s[i];
        }


    }
    // console.log(res);
    return res;

}


// 解法2
// var replaceSpace =
/* function replaceSpace(s) {
    let counter = 0;
    //统计空格
    for (let c = 0; c < s.length; c++) {
        if (s[c] == " ")
            counter++;
    }


    let len = s.length + 2 * counter;

    //倒序遍历
    for (let i = s.length - 1, j = len - 1; i < j; i--, j--) {
        if (s[i] == " ") {
            s[j - 2] = '%';
            s[j - 1] = '2';
            s[j] = '0';
            j -= 2;

        } else {
            s[j] = s[i];
        }

    }

    console.log(s);
    return s;

} */

let s = 'we are happy';

function(s);
console.log(repalceSpace)