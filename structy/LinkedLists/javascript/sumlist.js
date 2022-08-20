const sumList = (head) => {
    let sum = 0;
    let current = head
    while(current !== null) {
      sum += current.val
      current = current.next
    }
    return sum
  };
