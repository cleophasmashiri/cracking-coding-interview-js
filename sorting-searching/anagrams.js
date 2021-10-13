// Group Anagrams: Write a method to sort an array of strings so that all 
// the anagrams are next to each other.
// Tar = Rat.
// Arc = Car.
// Elbow = Below.
// State = Taste.
// Cider = Cried.
// Dusty = Study.
// Night = Thing.
// Inch = Chin.
const isAnagram = (s1, s2) => {
    const arr1 = [...s1].sort();
    const arr2 = [...s2].sort();
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
const sortAnagrams = (arr) => {
    // let str1 = 'my';
    // let str2 = 'my';
    // let str3 = new String('my');
    // let str4 = new String('my');
    // console.log(str1 == str2, str3 === str4);
    const set = new Set();
    const newArr = [];
    for (let i = 0; i<arr.length; i++) {
        if (!set.has(i)) {
            set.add(i);
            newArr.push(arr[i]);
            for (let j = 0; j<arr.length; j++) {
                if (!set.has(j) && isAnagram(arr[i].toLowerCase(), arr[j].toLowerCase())) {
                    set.add(j);
                    newArr.push(arr[j]);
                }
            }
        }
    }
    return newArr;
}

[['Tar', 'Arc', 'Rat', 'Car', 'dsf','abab', 'e', 'baba', 'dsf', 'tar', 'car']]
.map(arr => arr + ' -> ' + sortAnagrams(arr))
.forEach(a => console.log(a));