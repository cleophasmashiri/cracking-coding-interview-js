class {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
}
class Graph {
    constructor() {
        this.nodes = [];
    }
    buildGraph(arr, pairs) {
        const map = new Map();
        for (let a of arr) {
            let node = null;
            if (!map.has(a.data)) {
                node = new Node(a.data);
                map.set(a.data, node);
            } else {
                node = map.get(a.data);
            }
            for (let p of pairs) {
                if (p[1] === a.data) {
                    if (map.has(p[0])) {
                        node.children.push(map.has(p[0]));
                    } else {
                        let child = new Node(p[0]);
                        node.children.push(child);
                        map.set(child.data, child);
                    }
                }
            } 
            this.nodes.push(node);
        }
    }
}
const buildOrder = (graph, pairs) => {
    
}