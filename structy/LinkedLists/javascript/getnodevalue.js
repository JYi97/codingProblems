class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const getNodeValue = (head, index) => {
    let current = head
    let count = 0
    while (count < index) {
        if (current === null) {
            return null
        }
        current = current.next
        count += 1
    }
    return current.val
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

// console.log(getNodeValue(a, 2)); // 'c'

// console.log(getNodeValue(a, 7))
