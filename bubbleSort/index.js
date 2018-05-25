const bubbleSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        let shouldSort = false;

        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                shouldSort = true;
            }
        }

        if (shouldSort === false) {
            break;
        }
    }

    return arr;
};

console.log(bubbleSort([3, 7, 1, 2, 4, 5, 6]));