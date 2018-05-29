const getIndex = (arr, left = 0, right = arr.length - 1) => {
    let index = Math.floor((left + right) / 2);

    while (left <= right) {
        while (arr[left] < arr[index]) {
            left++
        }

        while (arr[right] > arr[index]) {
            right--;
        }

        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return left;
};


const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (arr.length > 1) {
        const index = getIndex(arr, left, right);

        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }

        if (index < right) {
            quickSort(arr, index, right);
        }
    }

    return arr;

};

console.log(quickSort([3, 7, 1, 2, 4, 5, 6]));