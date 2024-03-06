// write a function which creates a bank account given a PIN and initial deposit amount.
// The return value should be an object with four methods: 

// - ***checkBalance***: Given the correct PIN, return the current balance. 
//   (If the PIN is invalid, return “Invalid PIN.”)

// - ***deposit***: Given the correct PIN and a deposit amount, 
//   increment the account balance by the amount. (If the PIN is invalid, return “Invalid PIN.”)

// - ***withdraw***: Given the correct PIN and a withdrawal amount, 
//   decrement the account balance by the amount. 
//   You also shouldn’t be able to withdraw more than you have. 
//   (If the PIN is invalid, return “Invalid PIN.”)

// - ***changePin***: Given the old PIN and a new PIN, 
//   change the PIN number to the new PIN. 
//   (If the old PIN is invalid, return “Invalid PIN.”)

// returning an object where each element is a function.

function createAccount(pin, amount=0) {
    return {
        checkBalance(inputPin) {
            if (inputPin !== pin) return "Invalid PIN.";
            return `$${amount}`;
        },
        deposit(inputPin, depositAmount) {
            if (inputPin !== pin) return "Invalid PIN.";
            amount = amount + depositAmount;
            return `Successfully deposited $${depositAmount}. Current balance: $${amount}.`;
        },
        withdraw(inputPin, withdrawAmount) {
            if (inputPin !== pin) return "Invalid PIN.";
            if (withdrawAmount > amount) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            amount = amount - withdrawAmount;
            return `Successfully withdrew $${withdrawAmount}. Current balance: $${amount}.`;
        },
        changePin(oldPin, newPin) {
            if (oldPin !== pin) return "Invalid PIN.";
            pin = newPin;
            return "PIN successfully changed!"
        }
    };
}

module.exports = { createAccount };
