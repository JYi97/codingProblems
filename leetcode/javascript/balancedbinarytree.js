var isBalanced = function(root) {
    if (!root) return true
const getDepth = node => {
    if (!node) return 0

    return 1 + Math.max(getDepth(node.left), getDepth(node.right))
}
let leftDepth = getDepth(root.left)
let rightDepth = getDepth(root.right)
if (Math.abs(leftDepth - rightDepth) > 1) return false
else {
    return isBalanced(root.left) && isBalanced(root.right)
}

};
