class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    toString() {
        let curr = this;
        let s = '';
        while (curr) {
            s = s + (s === '' ? '' : '->') + curr.data;
            curr = curr.next;
        }
        return s;
    }
}

const deleteMiddle = (h) => {
    if (h === null) return null;
    let curr = h;
    len = 0;
    while (curr) {
        len++;
        curr = curr.next;
    }
    let m = Math.floor(len/2);
    curr = h;
    let prev = null;
    // 1>2>3
    // m = 1
    while (curr) {
        if (m === 0) {
            prev.next = curr.next;
            return h;
        }
        m--;
        prev = curr;
        curr = curr.next;
    }

}

const reduceToLL = (arr) => {
    let h = new Node(arr[0]);
    let curr = h;
    for (let i = 1; i < arr.length; i++) {
        curr.next = new Node(arr[i]);
        curr = curr.next;
    }
    return h;
}

let h = reduceToLL([1,2,3,4])

console.log(deleteMiddle(h, 2))