/* 思路：当前节点为空，从栈拿一个打印，当前节点往右跑
     当前节点不为空，当前节点压入栈，当前节点往左 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// var TreeNode = {
//     val: 1,
//     left: {
//         val: 2,
//         left: {
//             val: 4,
//         },
//         right: {
//             val: 5
//         }
//     },
//     right: {
//         val: 3,
//         left: {
//             val: 6,
//         },
//         right: {
//             val: 7
//         }
//     }
// };

function inorderTraversal(root) {
    // 牛客
    // var inorderTraversal = function(root) {
    let stackArr = [];
    let res = [];
    if (root != undefined) {
        while (stackArr.length != 0 || root != undefined) {
            if (root != undefined) {
                stackArr.push(root);
                root = root.left;
            } else {
                root = stackArr.pop();
                // console.log(root.val + "");
                res.push(root.val);
                root = root.right;
            }
        }
    }
    return res;

};

// var res = inorderTraversal(TreeNode);
// console.log(res)

// 定义树节点
function TreeNode(val) {
    // this.val = (val === undefined ? 0 : val)
    // this.left = (left === undefined ? null : left)
    // this.right = (right === undefined ? null : right)
    this.val = val;
    this.left = null;
    this.right = null;
}

// 构建树
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

var inor = inorderTraversal(root);
console.log(inor)