const merge = (A, B) => {
    if (!A || A.length === 0) return B;
    if (!B || B.length === 0) return A;
    newArr = new Array(A.length + B.length);
    let pointerA = 0;
    let pointerB = 0;
    let pointer = 0;
    while (pointerA < A.length && pointerB < B.length) {
        if (A[pointerA] < B[pointerB]) {
            newArr[pointer++] = A[pointerA++];
        } else {
            newArr[pointer++] = B[pointerB++];
        }
    }
    if (pointerA < A.length) {
        while (pointerA < A.length) newArr[pointer++] = A[pointerA++];
    } else if (pointerB < B.length) {
        while (pointerB < B.length) newArr[pointer++] = B[pointerB++];
    }
    return newArr;
}

[[[1, 4, 6], [2, 7]]]
    .map(arr => arr + ' -> ' + merge(arr[0], arr[1]))
    .forEach(res => console.log(res));
