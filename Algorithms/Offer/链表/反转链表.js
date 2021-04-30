function ListNode(val) {
    this.val = val;
    this.next = null;
}

function reverseList(head) {
    let pre = null;
    let next = null;

    while (head) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre;
}

let head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5
                }
            }
        }
    }
}

function printList(head) {
    while (head) {
        console.log(head.val + '')
        head = head.next;
    }
    return head;
}

let res = reverseList(head);
console.log(res);
let res1 = printList(res)
console.log(res1)