const compare = (a, b) =>  a - b;

const getMultiplicity = (arr) => arr.sort(compare).reduce((acc, el, index) => {

    const nextElem = arr[index + 1];
    const prevElem = arr[index - 1];

    if (nextElem - 1 !== el) {

        acc.push(el);

       if (index !== arr.length - 1){
           acc.push(',');
       }


    } else if (el - 1 !== prevElem) {
        acc.push(el);
        acc.push('-');
    }

    return acc;
}, []).join('');

console.log(getMultiplicity([1, 4, 5, 2, 3, 9, 8, 11, 0]));

console.log(getMultiplicity([1, 4, 5, 2, 3, 9, 8, 11, 0, 101, 15, 16, 17]));

// const getMultiplicity = (arr) => arr.sort(compare).reduce((acc, el) => {
//
//     if (el === +acc.slice(-1) + 1) {
//         let index = acc.length;
//         if (acc[acc.length - 2] === '-') {
//             index = acc.length - 2;
//         }
//         acc = acc.substr(0, index) + '-' + el;
//     } else if (el > +acc.slice(-1) + 1){
//         acc = acc + ',' + el;
//     }
//
//     return acc;
// }, String(arr[0]));
