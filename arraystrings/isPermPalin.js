// Palindrome Permutation: Given a string, write a 
// function to check if it is a permutation of a palin­ drome. A palindrome is a word or 
// phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat", "atco eta", etc.)

const getMapCount = (s) => {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        let k = s.charCodeAt(i);
        if (map.has(k)) {
            map.set(k, map.get(k) + 1);
        } else {
            map.set(k, 1);
        }
    }
    return map;
}

const isPermPalindrome = (str) => {
    const map = getMapCount(str);
    // even case => abba all even and 1 odd;
    const len = str.length;
    let countOdd = 0;
    let expectedOdd = 0;
    if (len % 2 !== 0) {
        expectedOdd = 1;
    } 
    for (let val of map.values()) {
        if (val % 2 !== 0) countOdd++;
    }
    return countOdd===expectedOdd;

}

['abc', 'aba', 'baba', '1212']
.forEach(a => console.log(a, isPermPalindrome(a)));