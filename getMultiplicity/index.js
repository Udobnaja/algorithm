const compare = (a, b) =>  {
    if (a < b) {
        return -1;
    }

    if (a > b) {
        return 1
    }

    return 0;
};

const getMultiplicity = (arr) => arr.sort(compare).reduce((acc, el) => {

    if (el === +acc.slice(-1) + 1) {
        let index = acc.length;
        if (acc[acc.length - 2] === '-') {
            index = acc.length - 2;
        }
        acc = acc.substr(0, index) + '-' + el;
    } else if (el > +acc.slice(-1) + 1){
        acc = acc + ',' + el;
    }

    return acc;
}, String(arr[0]));

console.log(getMultiplicity([1, 4, 5, 2, 3, 9, 8, 11, 0]));