const oneAway = (s1, s2) => {
    let big = null;
    let small = null;
    if (s1.length > s2.length) {
        big = s1;
        small = s2;
    } else {
        big = s2;
        small = s1;
    }
    if (small.length + 1 < big.length) return false;
    if (small.length === big.length) return isOneEdit(small, big);
    return isOneReplace(small, big);
}

const isOneEdit = (small, big) => {
    let count = 0;
    for (let i = 0; i < small.length; i++) {
        if (small.charCodeAt(i)!==big.charCodeAt(i)) count++
    }
    return count < 2;
}
const isOneReplace = (small, big) => {
    let p1 = 0;
    let p2 = 0;
    let count = 0;
    while (p1 < small.length && p2<big.length && count <2) {
        if (small.charCodeAt(p1) === big.charCodeAt(p2)) {
            p1++;
            p2++;
        } else {
            p2++;
            count++;
        }
    }
    return count<2;
}

[['abc', 'abx'], ['ab', 'abc'], ['a', 'abc']]
.forEach(arr => console.log(arr, oneAway(arr[0], arr[1])));