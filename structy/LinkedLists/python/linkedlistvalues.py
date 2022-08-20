class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def linked_list_values(head):
  vals = []
  current = head
  while current is not None:
    vals.append(current.val)
    current = current.next
  return vals

a = Node("a")
b = Node("b")
c = Node("c")
d = Node("d")

a.next = b
b.next = c
c.next = d

print(linked_list_values(a))
