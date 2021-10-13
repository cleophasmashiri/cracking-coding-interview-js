// Input: {5, 3, 1, 2, 3}
// Output: {5, 1, 3, 2, 3}
const sortToPV2 = (arr) => {
    arr.sort((a, b) => a - b);
    let newArr = [];
    let len = arr.length;
    for (let i = 0; i < arr.length; i += 2) {   
        newArr.push(arr[len-i-1]);
        newArr.push(arr[i]);
    }
    return newArr;
}
const sortToPV = (arr) => {
    const newArr = [];
    const used = new Array(arr.length).fill(false);
    while (newArr.length < arr.length) {
        let findLargest = -1;
        let findSmallest = -1;
        for (let i = 0; i < arr.length; i++) {
            if (!used[i]) {
                if (findLargest === -1 || arr[findLargest] < arr[i]) {
                    findLargest = i;
                }
            }
        }
        if (findLargest > -1) {
            newArr.push(arr[findLargest])
        }
        for (let i = 0; i < arr.length; i++) {
            if (!used[i]) {
                if (findSmallest == -1 || arr[findSmallest] > arr[i]) {
                    findSmallest = i;
                    used[findLargest] = true;
                }
            }
        }
        if (findSmallest > -1) {
            newArr.push(arr[findSmallest])
            used[findSmallest] = true;
        }
    }
    return newArr; x
}

[[5, 3, 1, 2, 3]]
    .map(a => a + ' -> ' + sortToPV(a))
    .forEach(a => console.log(a));