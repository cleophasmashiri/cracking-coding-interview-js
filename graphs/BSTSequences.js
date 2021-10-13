// BST Sequences: A binary search tree was created by traversing 
// through an array from left to right and inserting each element. 
// Given a binary search tree with distinct elements, 
// print all possible arrays that could have led to this tree.
// Input:
//      2
//  1       3
// Output: {2, 1, 3}, {2, 3, 1}

const BSTSequence = (root) => {
    const arrOfArrays = [];
    let arr1 = [];
    buildRootLR(root, arr1);
    let arr2 = [];
    buildRootRL(root, arr2);
    return [arr1, arr2];
    // Root-LR
    // Root-RL
}
const buildRootLR = (root, arr) => {
    if (root === null) return;
    arr.push(root.data);
    buildRootLR(root.left, arr);
    buildRootLR(root.right, arr);
}
const buildRootRL = (root, arr) => {
    if (root === null) return;
    arr.push(root.data);
    buildRootRL(root.right, arr);
    buildRootRL(root.left, arr);
}