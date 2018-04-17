const binarySearch = (list, value) => {
    let index = 0;
    let length = list.length - 1;

    while (index <= length){

        const middle = Math.floor((index + length) / 2);
        const element = list[middle];

        if (element === value){
            return middle;
        } else if (element < value) {
            index = middle + 1;
        } else {
            length = middle - 1;
        }
    }

    return null;
};

const list = [1, 3, 5, 7 , 9];

console.log(binarySearch(list, 3)); // 1

console.log(binarySearch(list, 2)); // null

// 1.1 8
// 1.2 на одну проверку
// 1.3 O(log(n))
// 1.4 O(n)
// 1.5 O(n)
// 1.6