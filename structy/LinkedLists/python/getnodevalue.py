class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def get_node_value(head, index):
  current = head
  count = 0
  while count < index:
    if current is None:
      return None
    count += 1
    current = current.next
  return current.val
