Node is a container of any type of data

Linked Lists contain many nodes

The last node in linked list needs to point to null

Linked Lists are an ordered data structure

Linked Lists vs Arrays

Position of node in linked lists corresponds to indices of array and nodes correspond with elements

Difference is that an array stores all the elements right next to each other and that leads to different run times.

For example, imagine inserting an element into an array with thousands of elements. It would have to shift all those elements by one. This would increase the run time as it would have to go through each element.

Nodes can exist anywhere in our space in our computer's memory instead of being stored right next to each other like elements of an array. This means that nodes do not have to shifted if we want to insert a node into a linked list.

Inserting a node into a linked list will have a shorter run time as it is changing two nodes while an array would go through every element.

Time complexity of inserting an element in an array is O(n) and node in a linked list is O(1)

Creating a Node:

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")

Link these nodes together:

a.next = b;
b.next = c;
c.next = d;

A -> B -> C -> D -> null

const printLinkedList = (head) => {
    let current = head;
    while (current !== null) {
        console.log(current.value);
        current = current.next;
    }
}

printLinkedList(a)

A
B
C
D

Recursive Answer:

const printLinkedList = (head) => {
    if (head === null) return;

    console.log(head.val);
    printLinkedList(head.next)
}

printLinkedList(a)
