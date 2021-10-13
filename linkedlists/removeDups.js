class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const toString = (head) => {
    if (head === null) return;
    let curr = head;
    let s = '';
    while (curr) {
        s = s + (s === '' ? '' : '->') + curr.data;
        curr = curr.next;
    }
    return s;
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

const removeDuplicates = (h) => {
    const set = new Set();
    let curr = h;
    let prev = null;
    while (curr) {
        if (set.has(curr.data)) {
            prev.next = curr.next;
        } else {
            set.add(curr.data);
            prev = curr;
        }
        curr = curr.next;
    }
    return h;
}

let head = reduceToLL([1, 2, 4, 3, 4, 2]);
console.log(toString(head));
console.log(toString(removeDuplicates(head)));
// [[1, 2, 3, 4]].forEach(arr => {
//     let head = null;
//     arr.forEach(a => {
//         if (head === null) {
//             head = new Node(a);
//         } else {
//             let curr = head;
//             while (curr.next !== null) {
//                 console.log(curr);
//                 curr = curr.next;
//             }
//             curr.next = new Node(a);
//         }
//     });
//     console.log(toString(head));
// });