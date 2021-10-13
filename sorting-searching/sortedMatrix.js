const searchSortedMatrix = (mat, k, ) => {
    const cols = mat[0].length;
    const rows = mat.length;
    for (let r = 0; r < rows; r++) {
        if (k >= mat[r][0] && k <= mat[r][cols-1]) {
            let c = binarySearch(mat[r], k, 0, cols-1);
            if (c > -1) return [r, c];
        }
    }
    return [-1, -1];
}
const binarySearch = (arr, k, l, h) => {
    if (l > h) return -1;
    let m = l + Math.floor((h-l)/2);
    if (k === arr[m]) return m;
    if (k >= arr[l] && k < arr[m]) return binarySearch(arr, k, l, m-1);
    return binarySearch(arr, k, m+1, h);
} 

const fillIt = (mat) => {
    let count = 1;
    for (let r = 0; r<mat.length; r++) {
        for (let c = 0; c < mat[0].length; c++) {
            mat[r][c] = count++;
        }
    }
    return mat;
}

const showIt = (mat) => {
    let count = 1;
    for (let r = 0; r<mat.length; r++) {
        for (let c = 0; mat[0].length; r++) {
           console.log(mat[r][c]);
        }
    }
    return mat;
}

[[2, 3]]
.map(dim => new Array(dim[0]).fill().map(() => new Array(dim[1]).fill(0)))
.map(mat => fillIt(mat))
.map(mat => {
    console.log(mat);
    return mat;
})
.forEach(m => console.log(searchSortedMatrix(m, 5)));