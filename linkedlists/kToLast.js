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
// 1->2->3->4->null
// 3  2  1  0
// 1  2  3
// 1st -> 3
// 2nd -> 2
// arr = [1,2,3,4]
// 4-1-1

const kToLast = (h, k) => {
    let curr = h;
    let index = 0;
    while (curr && index) {
        len++;
        curr = curr.next;
    }
    
    return curr.data;
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

console.log(kToLast(h, 2))