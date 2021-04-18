/* 问题：
    在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请输入这样的一个二维数组和一个整数，判断数组中是否含有该整数
    现有矩阵 matrix 如下：
    [
        [1,   4,  7, 11, 15],
        [2,   5,  8, 12, 19],
        [3,   6,  9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
    ]

    给定 target = 5，返回 true。
    给定 target = 20，返回 false。

    时间复杂度：O(M+N)    空间复杂度：O(1)
*/

/* 思路：
    矩阵中的数，小于该数的一定在其左侧，大于该数的一定在其下方
    从矩阵右上角开始找，缩小查找范围
*/
// let arr = [];
// console.log(arr == null);
// console.log(!arr);

function findNumberIn2DArray(arr, target) {
    // let rows = arr.length, //前面这样定义，然后在if里边使用在leetcode会报错，
    //     cols = arr[0].length; //报错地方：cols = arr[0].length;这个length未定义，具体原因我也布吉岛。。
    // console.log(rows)
    // console.log(cols)
    if (arr.length == 0 || arr[0].length == 0 || !arr) {
        return false;
    }

    let rows = arr.length,
        cols = arr[0].length;
    let r = 0,
        c = cols - 1;

    while (r < rows && c >= 0) {
        let rightTop = arr[r][c];
        if (target === rightTop) {
            return true;
        } else if (target < rightTop) {
            c--;
        } else {
            r++;
        }
    }
    return false;
}
let arr = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];

findNumberIn2DArray(arr, 9);