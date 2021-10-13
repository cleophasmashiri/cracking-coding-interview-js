const checkSubTree = (t1, t2) => {
    let path1 = printTree(t1);
    let path2 = printTree(t2);
    return path1.indexOf(path2) > -1;
}

const printTree = (root) => {
    if (root === null) return '';
    let q = [root];
    let path = String(root.data); 
    while (q.length > 0) {
        let node = q.shift();
        path += String(node.data);
        if (root.left) {
            q.push(root.left);
        }
        if (root.right) {
            q.push(root.right);
        }
    }
    return path;
}