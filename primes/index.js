const getPrimes = (num) => Array
    .from(new Array(num), (el, i) => i + 1)
    .filter((el) => {
        for (let i = 2; i < el; i++) {
            if ((el % i) === 0) {
                return false;
            }
        }

        return true;
    });

console.log(getPrimes(7)); // 1, 2, 3, 5^,7