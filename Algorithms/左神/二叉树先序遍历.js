// 问题：用递归和非递归的方式实现二叉树的先序遍历
// 思路： 使用栈，当前节点压栈，然后弹出，先压右，再压左


// 非递归方法
function preorderTraversal(root) {
    // var preorderTraversal = function(root) {
    let stackArr = [];
    let res = [];
    if (root !== undefined) {
        stackArr.push(root);

        while (stackArr.length != 0) {
            root = stackArr.pop();
            // console.log(root.val + "");
            res.push(root.val)

            //不可以写成root.right==null ,否则报错：TypeError: Cannot read property 'val' of undefined
            if (root.right != undefined) {
                stackArr.push(root.right);
            }
            if (root.left != undefined) {
                stackArr.push(root.left);
            }
        }
    }
    return res;
};

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
// var pre = preorderTraversal(TreeNode);
// console.log(pre)




// 树节点定义
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// 构建树
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);

var pre = preorderTraversal(root);
console.log(pre)