const pathsWithSum = (root, sum, paths = []) => {
   

};

const countToNode = (node, runningSum, targetSum) => {
    if (node === null) return 0;
    if (node.data === targetSum)  runningSum++;
    runningSum = countToNode(node.left, runningSum, targetSum);
    runningSum = countToNode(node.right, runningSum, targetSum);
    return runningSum;
};