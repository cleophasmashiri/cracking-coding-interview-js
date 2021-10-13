class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let COUNT = 10;

const minBst = (arr) => {
    // traverse in-order L-Root-R
    const mid = Math.floor(arr.length/2);
    let node = new Node(arr[mid]);
    console.log('inserting:', mid, arr[mid]);
    let left = 0;
    let right = 1;
    //insertNodes(arr, 0, arr.length-1, null, null);
    insertNodes(arr, 0, mid-1, node, left);
    insertNodes(arr, mid + 1, arr.length - 1, node, right);
    return node;
};
const insertNodes = (arr, start, end, node, leftRight) => {
    if (start <= end) {
        let mid = start + Math.floor((end-start)/2);
        // if (node === null) {
        //     node = new Node(arr[mid]);
        // }
        console.log('inserting', mid, arr[mid]);
        if (leftRight === 0) {
            node.left = new Node(arr[mid]);
            insertNodes(arr, start, mid-1, node.left, 0);
        } else if (leftRight === 1) {
            node.right = new Node(arr[mid]);
            insertNodes(arr, mid+1, end,node.right, 1);
        }
    }
};
const showTree = (root) => {
    console.log(root);
}

function print2DUtil(root,space)
{
    // Base case
    if (root == null)
        return;
   
    // Increase distance between levels
    space += COUNT;
   
    // Process right child first
    print2DUtil(root.right, space);
   
    // Print current node after space
    // count
    console.log("");
    for (let i = COUNT; i < space; i++)
        console.log("  ");
    console.log(root.data);
    console.log("");
   
    // Process left child
    print2DUtil(root.left, space);
}

[[1, 2, 3, 4, 5,6]]
.map(arr => minBst(arr))
.forEach(root => print2DUtil(root));

