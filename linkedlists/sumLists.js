// Sum Lists: You have two numbers represented by a linked list, 
// where each node contains a single digit.The digits are stored in reverse order, 
// such that the 1 's digit is at the head of the list. 
// Write a function that adds the two numbers and returns the sum as a linked list.
// EXAMPLE
// Input:(7-> 1 -> 6) + (5 -> 9 -> 2).Thatis,617 + 295. 
// Output:2 -> 1 -> 9.That is,912.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const intToLL = (num) => {
    let h = null;
    let tail = null;
    while (num > 0) {
        let rem = num % 10;
        num = Math.floor(num / 10);
        if (h === null) {
            h = new Node(rem);
            tail = h;
        } else {
            tail.next = new Node(rem);
            tail = tail.next;
        }
    }
    return h;
}

const sumList = (h1, h2) => {
    let sum = 0;
    let curr1 = h1;
    let curr2 = h2;
    while (curr1 && curr2) {
        let num1 = parseInt(curr1.data);
        let num2 = parseInt(curr2.data);
        sum += (num1 + num2);
        curr1 = curr1.next;
        curr2 = curr2.next;
    }
    let h3 = null;
    let tail = null;
    while (sum > 0) {
        let rem = sum % 10;
        sum = Math.floor(sum/10);
        if (h3 === null) {
            h3 = new Node(rem);
            tail = h3;
        } else {
            tail.next = new Node(rem);  
            tail = tail.next;
        }
    }
    return h3;
}


[456].map(num => intToLL(num))
    .forEach(h => console.log(h));