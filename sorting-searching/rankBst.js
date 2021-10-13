
class RootNode {
    constructor(x) {
        this.left = null;
        this.right = null;
        this.left_size = 0;
        this.data = x;
    }
    insert(x) {   
        if (x <= this.data) {
            if (this.left !=null) { 
                this.left.insert(x);
            } else {
                left = new RankNode(x);
            }
            this.left_size++;
        } else {
            if (this.right !== null) {
                this.right.insert(x);
            } else {
                this.right = new RankNode(x);
            }
        }
    }
    getRank(x) {
        if (x === this.data) return this.left_size;
        if (x < this.data) {
            if (!this.left) return -1;
            return this.getRank(x);
        } else {
            if (!this.right) return -1;
            return this.right.getRank(x);
        }
    }
}

let root = null;

const track = (x) => {
    if (root === null) {
        root = new RootNode();
    } else {
        root.insert(x);
    }
};

const getRankOfNumber = (x) => {
    return root.getRank(x);
};