const account = { 
    accountName: "Jakob's bank account",
    balance: 1337,

    getBalance: function () {
        alert(`Balance: ${this.balance} SEK`);
    },

    deposit: function (amount) {
        if (amount <= 0) {
            this.accountError("Amount is too low!");
            return;
        }
        this.balance += amount;
        alert(`Deposited: ${amount} SEK`);
    },

    withdraw: function (amount) {
        if (amount > this.balance) {
            this.accountError("You don't have enough funds on your account!");
            return;
        }
        this.balance -= amount;
        alert(`Withdrew: ${amount} SEK`);
    },

    getAccountName: function () {
        alert(`Name of bank account: ${this.accountName}`);
    },

    accountError: function (message) {
        alert(`Error: ${message}`);
    }
};

function atm() {
    const message = parseFloat(
        prompt(
            "Select a choice \n1.) Get balance \n2.) Make a deposit \n3.) Make a withdrawal \n4.) Get account name"
        )
    );

    switch (message) {
        case 1:
            account.getBalance();
            atm();
            break;
        case 2:
            const depositAmount = parseFloat(prompt("Enter amount:"));
            account.deposit(depositAmount);
            atm();
            break;
        case 3:
            const withdrawAmount = parseFloat(prompt("Enter amount:"));
            account.withdraw(withdrawAmount);
            atm();
            break;
        case 4:
            account.getAccountName();
            atm();
            break;
    }
}

atm();