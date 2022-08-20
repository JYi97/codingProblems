def linked_list_find(head, target):
  current = head
  while current is not None:
    if current.val is target:
      return True
    current = current.next
  return False
