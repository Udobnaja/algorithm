// GOOD
const isPalindrome = (str) => {
    let right = str.length - 1;
    let left = 0;
    let isP = true;
    for (left; left < str.length; left++) {
        if (str[left] === ' ') {
            left++;
        }

        if (str[right] === ' '){
            right--;
        }

        if (left >= right) {
            break;
        }

        if (str[left].toLowerCase() !== str[right].toLowerCase()) {
            isP = false;
            break;
        }


        right--;
    }

    return isP;
};
//
console.log(isPalindrome('А роза упала на лапу Азора'));

// BAD
// const isPalindrome = (str) => {
//     let s = str.toLowerCase().replace(/\s/g, '');
//     return s === s.split('').reverse().join('');
// };
//
// console.log(isPalindrome('А роза упала на лапу Азора'));