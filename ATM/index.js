class ATM {
    constructor() {
        this.count = 0;
        this.banknotes = {
            '10': 0,
            '50': 0,
            '100': 0,
            '500': 0,
            '1000': 0,
            '2000': 0,
            '5000': 0
        };

        this.keys = Object.keys(this.banknotes)
            .sort((a, b) => b - a);
    }

    putMoney(...money) {
        for (const note of money) {
            if (this.banknotes[note] !== undefined) {
                this.banknotes[note]++;
                this.count++;
            }
        }
    }

    getMoney(sum) {
        let money = [];
        if (this.count !== 0) {
            for (const key of this.keys){
                while (sum !== 0 && this.banknotes[key] > 0 && sum >= +key) {
                    this.banknotes[key]--;
                    this.count--;

                    sum -= +key;

                    money.push(key);
                }
            }
        }

        if (sum !== 0) {
            this.putMoney(...money);
            money = [];
        }

        return money;
    }
}

const atm = new ATM();

atm.putMoney(5000, 1000, 5000, 500, 10, 100, 50, 10, 10, 1000, 100, 100, 1000);

console.log(atm.getMoney(6110));
console.log(atm.getMoney(700));
console.log(atm.getMoney(5000));
console.log(atm.getMoney(5000)); // столько нету

console.log(atm);