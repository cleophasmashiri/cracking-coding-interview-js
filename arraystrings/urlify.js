// URLify: Write a method to replace all spaces in a string with '%20'. 
// You may assume that the string has sufficient space at the end to hold the additional 
// characters,and that you are given the "true" length of the string. 
// (Note: If implementing in Java,please use a character array so that you c
// an perform this operation in place.)
// EXAMPLE
// Input: "Mr John Smith ", 13 Output: "Mr%20John%20Smith"

const urlify = (str) => {
    const arr = [];
    let pointer = 0;
    let spaceCode = ' '.charCodeAt(' ');
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) === spaceCode) {
            if (i > 0 && str.charCodeAt(i-1) === spaceCode) {
                //arr[pointer++] = '';
            } else {
                arr[pointer++] = '%';
                arr[pointer++] = '2';
                arr[pointer++] = '0'
            }
        } else {
            arr[pointer++] = str[i];
        }
    }
    return arr.join('');
}

['abc df', 'xs  f']
.forEach(a => console.log(urlify(a)));