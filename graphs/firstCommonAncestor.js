const firstCommonAncestor = (root, key1, key2) => {
    if (root === null) return null;
    let key1Left = findNode(root.left, key1);
    let key2Right = findNode(root.right, key2);
    if (key1Left && key2Right) return root;
    let key1Right = findNode(root.right, key1);
    let key2Left = findNode(root.left, key1);
    if (key2Left && key1Right) return root;
    if (key1Left && key2Left) return firstCommonAncestor(root.left, key1, key2);
    return firstCommonAncestor(root.right, key1, key2);
}
const findNode = (root, key) => {
    if (root === null) return null;
    const q = [root];
    while (q.length > 0) {
        let node = q.shift();
        if (node.data === key) return node;
        if (node.left) {
            q.push(node.left);
        }
        if (node.right) {
            q.push(node.right);
        }
    }
    return null;
}