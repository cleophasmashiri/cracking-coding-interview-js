
const numbersMap = new Map();
const track = (x) => {
    if (numbersMap.has(x)) {
        numbersMap.set(x, numbersMap.get(x) +1);
    } else {
        numbersMap.set(x, 1);
    }
}

const getRankOfNumber = (x) => {
    let sum = 0;
    for (let k of numbersMap.keys()) {
        if (k <= x) sum += numbersMap.get(k);
    }
    return sum;
} 

[5, 1, 4, 5, 9, 7, 13, 3]
.forEach(a => track(a));
[5, 1, 4, 5, 9, 7, 13, 3]
.map(a => a + ' rank: '  + getRankOfNumber(a))
.forEach(a => console.log(a));