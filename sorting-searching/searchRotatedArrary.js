// Search in Rotated Array: Given a sorted array of n integers that has been
//  rotated an unknown number of times, write code to find an element in the array. 
//  You may assume that the array was originally sorted in increasing order.
// EXAMPLE


// lnput:findSin{15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14} Output: 8 (the index of 5 in the array)

//v=1, m=2 [4,5, 6,1,2,3]
const searchRotatedArray = (a, v, l, h) => {
    if (l > h) return -1;
    let m = l + Math.floor((h - l) / 2);
    if (v === a[m]) return m;
    if (a[l] <= a[m] && v >= a[l] && v <= a[m]) return searchRotatedArray(a, v, l, m - 1);
    if (a[m] <= a[h] && v >= a[m] && v <= a[h]) return searchRotatedArray(a, v, m + 1, h);
    if (a[l] >= a[m]) return searchRotatedArray(a, v, l, m - 1);
    if (a[m] >= a[h]) return searchRotatedArray(a, v, m + 1, h);
    return -1;
}

// const searchSorted = (arr, val, low, high) => {
//     console.log(val, low, high);
//     // base case
//     if (low > high) return -1;
//     // recursive case
//     let mid = low + Math.floor((high-low)/2);
//     if (arr[mid] === val) return mid;
//     if (val < arr[mid]) return searchSorted(arr, val, low, mid-1);
//     return searchSorted(arr, val, mid+1, high);
// }

// [0, 3] => 1 

[{ val: 6, arr: [4, 5, 6, 1, 2, 3] }, { val: 3, arr: [4, 5, 6, 1, 2, 3] }]
    .map(a => a.val + ' found at: ' + searchRotatedArray(a.arr, a.val, 0, a.arr.length - 1) + ' of [' + a.arr + ']')
    .forEach(b => console.log(b));