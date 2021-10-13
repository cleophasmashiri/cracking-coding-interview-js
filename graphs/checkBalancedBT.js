const checkBalancedBT = (root) => {
    if (root === null) return true;
    let h1 = height(node.left);
    let h2 = height(node.right);
    if (Math.abs(h1 - h2) > 1) return false;
    return checkBalancedBT(node.left) && checkBalancedBT(node.right);
}
const height = (node) => {
    if (node === null) return 0;
    return 1 + Math.max(height(node.left), height(node.right));
}