class NodeLL {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
} 
class NodeTree {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
const listOfDepths = (root) => {
    if (root === null) return;
    const queues = [[], []];
    queues[0].push(root);
    let arrLL = [];
    let currLL = null;
    while (queues[0].length > 0) {
        let node = queues.shift();
        if (currLL === null) {
            currLL = new NodeLL(node.data);
        } else {
            let tail = currLL;
            while (!tail.next) {
                tail = tail.next;
            }
            tail.next = new NodeLL(node.data);
        }
        if (!node.left) {
            queues[1].push(node.left);
        }
        if (!node.right) {
            queues[1].push(node.right);
        }
        if (queues[0].length === 0) {
            arrLL.push(currLL);
            queues[0] = queues[1];
            queues[1] = [];
            currLL = null;
        }
    }
    return arrLL;
}