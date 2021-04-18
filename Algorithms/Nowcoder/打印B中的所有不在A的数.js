/* 例子一：
    数组A有序，数组B无序，打印B中的所有不在A的数
    分析时间复杂度

    思路1：遍历  
    思路2：二分查找
    思路3：先排序，后移动，逐个比对，谁小就移动谁 */


// 方法1：遍历
// 遍历一遍B，将B中的每个数拿来在A中找，相等就继续，不相等就打印
// 时间复杂度O(M*N)

function getAllNotIncluded(arrA, arrB) {
    for (let i = 0; i < arrB.length; i++) {
        let temp = arrB[i];
        var flag = false;

        for (let j = 0; j < arrA.length; j++) {
            if (arrA[j] == temp) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            console.log(temp);
        }

    }

}


// 方法2 ： 二分查找
// 时间复杂度O(MlogN)

/* function getAllNotIncluded(arrA, arrB) {
    let res = [];
    for (let i = 0; i < arrB.length; i++) {
        let l = 0;
        let r = arrA.length;
        var flag = false;

        while (l <= r) {
            let mid = l + ((r - l) >> 1);
            if (arrA[mid] == arrB[i]) {
                flag = true;
                break;
            }
            if (arrA[mid] > arrB[i]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }

        }
        if (!flag) {
            res.push(arrB[i]);
        }

    }
    return res;
} */

let arrA = [1, 2, 3, 4];
let arrB = [3, 6, 1, 4, 9];
var a = getAllNotIncluded(arrA, arrB);