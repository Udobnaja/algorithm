const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++){
      for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
          [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      }
  }
  return arr;
};

console.log(insertionSort([3, 7, 1, 2, 4, 5, 6]));