var reverseList = function(head) {
    // current is the head
    // prev is null
    // set the next of the current to the prev
    // iterate to the next node until there is no next for node
    // current node is the new head
    let current = head
    let prev = null
    while(current !== null) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
};
