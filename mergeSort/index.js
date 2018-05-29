
const merge = (leftArr, rightArr) => {
    const result = [];
    let left = 0;
    let right = 0;

    while (left < leftArr.length && right < rightArr.length) {
        if (leftArr[left] < rightArr[right]) {
            result.push(leftArr[left++]);
        } else {
            result.push(rightArr[right++]);
        }
    }

    return [...result, ...leftArr.slice(left), ...rightArr.slice(right)]
};
 const mergeSort = (arr) => {
     if (arr.length <= 1) {
         return arr;
     }
     const index = Math.floor(arr.length / 2);

     const leftArr = arr.slice(0, index);
     const rightArr = arr.slice(index);

     return merge(mergeSort(leftArr), mergeSort(rightArr));
 };

//
const arr = [3, 7, 1, 2, 4, 5, 6];
//
console.log(mergeSort(arr));