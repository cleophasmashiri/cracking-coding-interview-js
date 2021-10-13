
class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
}
class Graph {
    constructor() {
        this.node = [];
    }
}
const isConnected = (n1, n2) => {
    // traverse bfs from n1 
    // look for n2
    let q = [n1];
    const visited = new Set(); 
    while (q.length > 0) {
        let node = q.shift();
        visited.add(node);
        if (node===n2) return true;
        for (let child of node.children) {
            if (!visited.has(child)) {
                q.push(child);
            }
        }
    }
    return false;
}

