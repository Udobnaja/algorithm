// const partition = (arr, left, right) => {
//     let pivot = arr[Math.floor((left + right) / 2)]; // опорный элемент
//
//     while (left <= right) {
//         while (arr[left] < pivot) {
//             left++;
//         }
//
//         while (arr[right] > pivot) {
//             right--;
//         }
//
//         if (left <= right) {
//             [arr[left], arr[right]] = [arr[right], arr[left]];
//             left++;
//             right--;
//         }
//     }
//
//     return left;
//
// };
//
// const mergeSort = (arr, left, right) => {
//     if (arr.length > 1) {
//         const index = partition(arr, left, right);
//
//         if (left < index - 1) {
//             mergeSort(arr, left, index - 1);
//         }
//
//         if (index < right) {
//             mergeSort(arr, index, right);
//         }
//     }
//
//     return arr;
// };
//
// const arr = [3, 7, 1, 2, 4, 5, 6];
//
// console.log(mergeSort(arr, 0, arr.length - 1));


const mergeSort = (arr) => {
    if (arr.length > 1) {
        mergeSort()
    }
}