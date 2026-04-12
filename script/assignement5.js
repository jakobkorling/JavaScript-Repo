const account = { 
    accountName: "Jakob's bank account",
    balance: 1337,

    getBalance: function () {
        console.log(`Balance: ${this.balance} SEK`);
    },

    deposit: function (amount) {
        if (amount <= 0) {
            this.accountError("Amount is too low!");
            return;
        }
        this.balance += amount;
        console.log(`Deposited: ${amount} SEK`);
    },

    withdraw: function (amount) {
        if (amount > this.balance) {
            this.accountError("You don't have enough funds on your account.");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrew: ${amount} SEK`);
    },

    getAccountName: function () {
        console.log(`Name of bank account: ${this.accountName}`);
    },

    accountError: function (message) {
        console.error(`Èrror: ${message}`);
    }
};