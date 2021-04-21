// 问题：二叉树的后序遍历  非递归实现

function proOrderTraversal(root) {
    // var proOrderTraversal = function(root) {
    let stackArr1 = [];
    let stackArr2 = [];
    let res = [];
    if (root !== null) {
        stackArr1.push(root);

        while (stackArr1.length !== 0) {
            root = stackArr1.pop();
            stackArr2.push(root);
            if (root.left !== null) {
                stackArr1.push(root.left);
            }
            if (root.right !== null) {
                stackArr1.push(root.right);
            }
        }
        while (stackArr2.length !== 0) {
            res.push(stackArr2.pop().val);
        }
    }
    return res;
}

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

var pre = proOrderTraversal(root);
console.log(pre)