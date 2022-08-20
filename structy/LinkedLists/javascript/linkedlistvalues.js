class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListValues = (head) => {
    let vals = []
    let current = head
    while(current !== null) {
        vals.push(current.val)
        current = current.next
    }
    return vals
    // if (head.next === null) return head.val
    // console.log("IS THIS GETTING HIT", head.val)
    // return [head.val].concat(linkedListValues(head.next))
    // if (head !== null) {
    //     vals.push(head.val)
    //     console.log("IS THIS GETTING HIT", head.val, vals)
    //     linkedListValues(head.next)
    // }
    // return vals
  };

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// console.log(linkedListValues(a));
