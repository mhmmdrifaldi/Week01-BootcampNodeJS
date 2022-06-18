function maxWordLength(params) {
    const arr = ("" + params).split(" ");
    let arr1 = arr[0];

    for (i = 0; i < arr.length; i++) {
        if (arr1.length < arr[i].length) {
            arr1 = arr[i];
        }
    }
    return arr1;
}

console.log(maxWordLength("aku suka bootcamp sentul city")); //bootcamp
