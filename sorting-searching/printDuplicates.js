const printDuplicates = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i!==j && arr[i]===arr[j]) console.log(arr[i]);
        }
    }
}

[[1, 2, 3], [1,3,3]]
.map(arr => printDuplicates(arr));
//.forEach(arr => console.log(arr));
