const choiceSort = (arr) => {
    for (let i = 0; i < arr.length; i++){
        let min = arr[i];
        let pos = i;

        for (let j = i; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                pos = j;
            }

            if (j === arr.length - 1) {
                if ( pos !== i) {
                    [arr[i], arr[pos]] = [arr[pos], arr[i]];
                }
            }
        }

    }
    return arr;
};

console.log(choiceSort([3, 7, 1, 2, 4, 5, 6]));

