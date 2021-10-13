// Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data structures?
// import {simpleAssert} from '../simpleAssert/simpleAssert';

const isUnique = (str) => {
    const set = new Set();
    for (let i = 0; i < str.length; i++) {
        if (set.has(str.charCodeAt(i))) return false;
        set.add(str.charCodeAt(i));
    }
    return true;
}

const isUniqueBoolean = (str) => {
    const found = new Array(128).fill(false);
    for (let i = 0; i < str.length; i++) {
        let val = str.charCodeAt(i);
        if (found[val] === true) return false;
        found[val] = true;
    }
    return false;
}

['abc', 'abca']
    .forEach(a => console.log(a, 'is', isUnique(a)));



