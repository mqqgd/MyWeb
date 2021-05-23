
function Node(element) {
    this.element = element;

    this.next = null;

}

function LinkedList() {
    this.head = null

    // this.findPrev = findPrev;

    this.insert = insert;

    this.showLinklist = showLinklist;
    this.length = 0

}

LinkedList.prototype.append = function (item) {
    let newNode = new Node(item)
    if (this.length === 0) {
        this.head = newNode
    } else {
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode
    }
    this.length++
}
// findPrev 找到目标节点的前一个节点,遍历条件是curr.next.element == item
LinkedList.prototype.findPrev = function (item) {
    var currentNode = this.head;
    while (!(currentNode.next == null) && (currentNode.next.element != item)) {
        currentNode = currentNode.next
    }
    return currentNode
}


function insert(newElement, item) {
    var newNode = new Node(newElement);
    var currentPrev = this.findPrev(item);  //当前节点的前一个节点
    newNode.next = currentPrev.next;
    currentPrev.next = newNode;

}

function showLinklist() {
    var currentNode = this.head
    while (currentNode.next) {
        console.log(currentNode.next.element)
        currentNode = currentNode.next
    }
}


var list = new LinkedList();
list.append('a')
list.append('b')
list.append('c')
console.log(list);
console.log(list.showLinklist());
