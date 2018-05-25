const getPrimes = (num) => (num > 0) ? Array
    .from(new Array(num), (el, i) => i + 1)
    .filter((el) => {
        for (let i = 2; i < el; i++) {
            if ((el % i) === 0) {
                return false;
            }
        }

        return true;
    }) : [];

// O(n½),

console.log(getPrimes(8)); // [1, 2, 3, 5, 7]
console.log(getPrimes(0)); //  []
console.log(getPrimes(-1)); //  []


const eratosthenesSieve = (num) => {
    const res = [];
    res[1] = false;

    for (let i = 2; i <= num; i++) {
        res[i] = true;
    }

    for (let i = 2; i*i <= num; i++) {
        if (res[i] === true) {
            for (let k = i*i; k <= num; k +=i ) {
                res[k] = false;
            }
        }
    }

    return res.reduce((acc, el, index) => {
        if (el === true){
            acc.push(index);
        }
        return acc;
    }, [])
};
//O(n log(log n))}

console.log(eratosthenesSieve(8));
console.log(eratosthenesSieve(0));
console.log(eratosthenesSieve(-1));
