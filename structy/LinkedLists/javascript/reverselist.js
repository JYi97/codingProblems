class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const reverseList = (head) => {
    let current = head
    let prev = null
    if (current.next === null) {
        return current.val
    }
    while (current !== null) {
        if (prev === null) {
            current.next = null
            prev = current
            console.log("THIS SHOULD BE A", prev)
            current = current.next
            console.log("THIS IS THE CURRENT ON TOP", current)
        } if (prev !== null) {
            current.next = prev
            prev = current
            current = current.next
            console.log("THIS IS THE CURRENT ON BOTTOM", current)
        } if (current.next === null) {

        }
    }
    //   return current.val
};

const p = new Node("p");
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// p

console.log(reverseList(p)); // p
console.log(reverseList(a));
