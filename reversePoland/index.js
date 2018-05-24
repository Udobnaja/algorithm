const OPERATIONS = ['*', '-', '+', '%'];

const calcTwo = (a, b, operation) => {
    switch (operation) {
        case '*':
            a = b * a;
            break;
        case '-':
            a = b - a;
            break;
        case '/':
            a = b / a;
            break;
        case '+':
            a = b + a;
            break;
        default:
            break;
    }

    return a;
};

const calcReduce = (reducedArr, acc, operationsArr) => {
    return reducedArr.reduce((a, el, index, arr) => {
        const operand = arr[index + 1];
        return calcTwo(a, operand, operationsArr[index]);
    }, acc);
};

const calc = (notation) => {
    let key = 0;
    const operands = {};
    const operations = {};
    const oo = [];

    notation = notation.split(' ');

    for (const symbol of notation) {
        if (OPERATIONS.includes(symbol)) {
            if (operations[key] === undefined) {
                operations[key] = [];
            }

            if (operations[key].length === operands[key].length - 1) {
                oo.push(symbol);
                continue;
            }

            operations[key].push(symbol);
        } else {
            if (operations[key] !== undefined) {
                key++;
            }

            if (operands[key] === undefined) {
                operands[key] = [];
            }

            operands[key].push(+symbol);
        }
    }

    let result = [];

    for (const key in operands) {
        const operandsReversed = operands[key].reverse();

        const res = calcReduce(operandsReversed, operands[key][0], operations[key]);
        result.push(res);
    }

    if (oo.length === 0) {
        return result[0];
    } else {
        result = result.reverse();
        return calcReduce(result, result[0], oo);
    }
};

const trueCalc = (notation) => {
   const stack = [];

    notation = notation.split(' ');

    for (const symbol of notation) {
        if (OPERATIONS.includes(symbol)) {
            let a = stack[stack.length - 1];
            let b = stack[stack.length - 2];
            stack.splice(-2, 2);
            stack.push(calcTwo(a, b, symbol))
        } else {
            stack.push(+symbol);
        }
    }

    return stack[0];
};

console.log(calc('7 2 * 3 +')); // 17
console.log(calc('7 2 3 * -')); // 1
console.log(calc('-7 5 -')); // -12
console.log(calc('1 2 + 4 * 3 +')); // 15
console.log(calc('7 2 3 1 * - - 3 5 + -')); // 0
console.log(calc('7 2 3 1 * - - 3 10 + -')); // -5

console.log(trueCalc('7 2 * 3 +')); // 17
console.log(trueCalc('7 2 3 * -')); // 1
console.log(trueCalc('-7 5 -')); // -12
console.log(trueCalc('1 2 + 4 * 3 +')); // 15
console.log(trueCalc('7 2 3 1 * - - 3 5 + -')); // 0
console.log(trueCalc('7 2 3 1 * - - 3 10 + -')); // -5
