// 只实现了核心部分，没有处理输入

function DoubleListNode(val) {
    this.val = val;
    this.prev = null;
    this.next = null;

}

function reverseDoubleList(head) {
    let pre = null;
    let next = null;
    while (head) {
        next = head.next;
        head.next = pre;
        head.prev = next;
        pre = head;
        head = next;
    }
    return pre;

}