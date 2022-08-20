class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def sum_list(head):
  current = head
  sum = 0
  while current is not None:
    sum += current.val
    current = current.next
  return sum
