const linkedListFind = (head, target) => {
    let current = head
    while (current !== null) {
        if (current.val === target) {
            return true
        }
        current = current.next
    }
    return false
};
