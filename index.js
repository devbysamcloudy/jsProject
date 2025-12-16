let anAccount = {
    cash: 0,
    owner: "",
    pin: null,
    accountNumbers: [],
    lastTransaction: null,

    newAccount: function () {
        const newUser = prompt("Enter Your Name");
        const userPin = Number(prompt("Enter your 4 digit PIN"));
        const money = Number(prompt("Enter your starting amount"));

        if (isNaN(userPin) || userPin < 1000 || userPin > 9999) {
            alert("PIN ERROR: Must be 4 digits");
            return;
        }

        if (isNaN(money) || money < 0) {
            alert("Invalid starting amount");
            return;
        }

        const accountNumber = prompt("Enter account number");

        if (this.accountNumbers.includes(accountNumber)) {
            alert(`ERROR: Account already exists, ${newUser}`);
            return;
        }

        this.owner = newUser;
        this.pin = userPin;
        this.cash = money;
        this.accountNumbers.push(accountNumber);

        alert(`Account created successfully for ${newUser}`);
        console.log(this);
    },

    newDeposit: function () {
        let money = Number(prompt("Enter your deposit amount"));

        if (isNaN(money) || money <= 0) {
            alert("ENTER A VALID AMOUNT");
            return;
        }

        this.cash += money;
        this.lastTransaction = `Deposited ${money}`;
        alert(`Deposit successful. New balance: ${this.cash}`);
    },

    newWithdraw: function () {
        let withdraw = Number(prompt("Enter amount you wish to withdraw"));

        if (isNaN(withdraw) || withdraw <= 0) {
            alert("Enter a valid amount");
            return;
        }

        if (withdraw > this.cash) {
            alert("Insufficient balance");
            return;
        }

        let confirmWithdraw = prompt(
            `Do you wish to withdraw ${withdraw}? Type yes or no`
        ).toLowerCase();

        if (confirmWithdraw === "yes") {
            this.cash -= withdraw;
            this.lastTransaction = `Withdrew ${withdraw}`;
            alert(`Withdrawal successful. New balance: ${this.cash}`);
        } else {
            alert("Withdrawal cancelled");
        }
    },

    newBalance: function () {
        let newDate = new Date().toLocaleString();
        alert(`Your balance is ${this.cash} since ${newDate}`);
    },

    showLastTransaction: function () {
        if (this.lastTransaction) {
            alert(`Last transaction: ${this.lastTransaction}`);
        } else {
            alert("No transactions have been made yet.");
        }
    }
};
