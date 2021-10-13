const validateBST = (root) => {
    if (root === null) return true;
    if (root.left && root.data < root.left) return false;
    if (root.right && root.data > root.right) return false;
    return validateBST(root.left) && validateBST(root.right);
}