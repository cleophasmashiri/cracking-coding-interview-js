const rotateMatrix = (matrix) => {
    // 1 2 3
    // 4 5 6
    // 7 8 9
    // => 90d rotate
    // 7 4 1
    // 8 5 2
    // 9 6 3

    // get col 1 
    // fill col 1 to row 1 as 
    const len = m.length;
    let arr = new Array(len).fill().map(() => new Array(len).fill(0));
    for (let r = 0; r < m.length; r++) {
        let currCol = r;
        for (let c = 0; c < m.length; c++) {
            let currRow = len - c - 1;
            arr[r][c] = m[currRow][currCol];
        }
    }
    return arr;
}

const fillMatrix = (m) => {
    let count = 1;
    for (let r = 0; r < m.length; r++) {
        for (let c = 0; c < m.length; c++) {
            m[r][c] = count++;
        }
    }
    return m;
}

let m = new Array(3).fill()
    .map(() => new Array(3).fill(1));
m = fillMatrix(m);
console.log(m);
console.log(rotateMatrix(m));


