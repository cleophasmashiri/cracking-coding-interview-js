// Check Permutation: Given two strings,
// write a method to decide if one is a permutation of the other.
const isPerm = (s1, s2) => {
    if (s1.length !== s2.length) return false;
    const arr1 = [...s1];
    const arr2 = [...s2];
    arr1.sort();
    arr2.sort();
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
[['abc', 'bca'], ['abc', 'xca'], ['abc', 'bca34']]
.forEach(arr => console.log(arr, 'is perm', isPerm(arr[0], arr[1])));