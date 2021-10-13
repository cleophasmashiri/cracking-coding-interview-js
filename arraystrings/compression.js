const compress = (str) => {
    const arr = [];
    let counter = 1;
    let curr = str[0];
    for (let i = 1; i <= str.length; i++) {
        //console.log('i', i, 'i-1', i-1, 'len', str.length);
        if (i === str.length) {
            arr.push(curr + String(counter));
        } else if (str.charCodeAt(i-1) === str.charCodeAt(i)) {
            counter++;
        } else {
            arr.push(curr + String(counter));
            curr = str[i];
            counter = 1;
        }
    }
    let result = arr.join('');
    return result.length < str.length? result: str;
}

['abcccd', 'abc', 'abccccccvv']
    .forEach(s => console.log(s, compress(s)));