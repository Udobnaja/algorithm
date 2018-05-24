const OPEN_BRACKETS = ['{', '(', '['];
const BRACKETS_MAP = {
    '}': '{',
    ']': '[',
    ')': '('
};

const isCorrectAlign = (exp) => {
    let isCorrect = true;
    const stack = [];
    for (const char of exp) {
        if (OPEN_BRACKETS.includes(char)){
            stack.push(char);
        } else {
            if (BRACKETS_MAP[char] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                isCorrect = false;
                break;
            }
        }
    }

    if (stack.length !== 0) {
        isCorrect = false;
    }

    return isCorrect;
};


console.log(isCorrectAlign('({[]})')); // true
console.log(isCorrectAlign('({[}])')); // false
console.log(isCorrectAlign(']')); // false
console.log(isCorrectAlign('{(')); // false
console.log(isCorrectAlign('')); // true