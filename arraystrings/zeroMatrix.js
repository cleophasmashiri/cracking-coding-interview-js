// Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0,
// its entire row and column are set to 0.
const zeroMatrix = (m) => {
    const setCols = new Set();
    const setRows = new Set();
    for (let r = 0; r < m.length; r++) {
        for (let c = 0; c < m.length; c++) {
            if (m[r][c] === 0) {
                setCols.add(r);
                setRows.add(c);
            }
        }
    }
    setCols.forEach(c => {
        for (let r = 0; r < m.length; r++) m[r][c] = 0;
    });
    setRows.forEach(r => {
        for (let c = 0; c < m.length; c++) m[r][c] = 0;
    });
    return m;
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
console.log(zeroMatrix(m));
