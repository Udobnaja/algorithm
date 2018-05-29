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

const getAnagrams = (...arr) => {
  const result = [];
  for (let j = 0; j < arr.length; j++) {
      for (let i = j+1; i < arr.length; i++){
          if (arr[j].length === arr[i].length) {
              if (arr[j].toLowerCase().split('').sort().join('') === arr[i]
                      .toLowerCase()
                      .split('')
                      .sort()
                      .join('')){
                  result.push([arr[j], arr[i]]);
                  j++;
                  break;
              }
          }
      }
  }

  return result;
};

console.log(getAnagrams('нос', 'сон', 'снедь', 'днесь'));