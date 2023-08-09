const bankAccount = {
  accountNumber: "1234567890",
  balance: 1000,
  accountHolder: "Seroj",
};
function problem17(amount, funcTion) {
  this.balance += 400;
  updateBalance(amount, funcTion);
}

function updateBalance(amount, funcTion) {
  if (amount < 0) {
    console.log("invalid amount");
    return;
  }
  if (funcTion == "deposit") {
    console.log(
      "Deposited : $",
      amount + ". New balance : " + "$" + (bankAccount.balance + amount)
    );
    bankAccount.balance = bankAccount.balance + amount;
  } else if (funcTion == "withdraw") {
    if (amount > bankAccount.balance) {
      console.log("Insufficient balance or invalid withdrawal amount.");
    } else {
      console.log(
        "Withdrew $" +
          amount +
          ". New balance : $" +
          (bankAccount.balance - amount)
      );
      bankAccount.balance -= amount;
    }
  } else {
    console.log("invalid function");
    return;
  }
}
