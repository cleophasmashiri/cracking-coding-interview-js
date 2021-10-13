class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.count = 0;
        this.root = null;
    }

    insert(data, node) {
        this.count++;
        if (node === null) {
            node = new Node(data);;
        } else {
            let countLeft = this.countChildren(node.left);
            let countRight = this.countChildren(node.right);
            if (countLeft <= countRight) {
                this.insert(data, node.left);
            } else {
                this.insert(data, node.right);
            }
        }
    }
    delete(data) {
        let q = [this.root];
        let parent;
        while (q.length > 0) {
            let n = q.shift();
            if (n.data === data) {
                this.count--;
                if (n.left === null && n.right === null) {
                    if (parent.left === n) parent.left = null;
                    else if (parent.right === n) parent.right = null;
                } else if (n.left === null || n.right === null) {
                    let child = n.left ? n.left : n.right;
                    if (parent.left === n) parent.left = child;
                    else if (parent.right === n) parent.right = child;
                } else {
                    parent.left = n.left;
                    parent.right = n.right;
                }
            }
            if (n.left) {
                parent = n;
                q.push(n.left);
            }
            if (n.right) {
                parent = n;
                q.push(n.right);
            }
        }
    }
    find(data) {
        let q = [this.root];
        while (q.length > 0) {
            let n = q.shift();
            if (n.data === data) return n;
            if (n.left) {
                q.push(n.left);
            }
            if (n.right) {
                q.push(n.right);
            }
        }
        return null;
    }
    getRandomNode() {
        let randomIndex = Math.floor(Math.random() * this.count);
        let currIndex = 0;
        let q = [this.root];
        while (q.length > 0) {
            let n = q.shift();
            if (currIndex === randomIndex) return n;
            currIndex++;
            if (n.left) {
                q.push(n.left);
            }
            if (n.right) {
                q.push(n.right);
            }
        }
        return null;
    }

    countChildren(node) {
        if (node === null) return 0;
        return 1 + this.countChildren(node.left) + this.countChildren(node.right);
    }
}