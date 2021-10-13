const { exception } = require("console");

const arr = [];

class Stack {
    constructor(size) {
        this.start =arr.length===0? 0: arr.length-1;
        arr.length += size;
        this.end = arr.length-1;
        this.top = -1;
    }
    push(data) {
        if (this.top <= this.end) {
            arr[++this.top] = data;
        } else {
            throw new exception('Index out b err');
        }
    }
    pop() {
        if (this.top> -1) {
            let temp = arr[this.top];
            arr[this.temp] = null;
            this.top--;
            return temp;
        }
    }
    peek() {
    }
    isEmpty() {
    }
}