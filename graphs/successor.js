const successor = (root, key) => {
    let node = findNode(root, key);
    if (node) {
        if (node.left) return node.left;
        return node.right;
    }
    return null;
}
const findNode = (root, key) => {
    if (root === null) return null;
    if (root.data === key) return root;
    if (key < root.data) return findNode(root.left, key);
    return findNode(root.right, key);
}