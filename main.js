#! /usr/bin/env node
import inquirer from "inquirer";
// variable show the total balamce of in ATM
let myBalance = 100000; //Dollars
let myPin = 1234;
// Using inquirer for Entering the pin
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin Number",
        type: "number",
    },
]);
// Using if else for the response that will b provided by customer
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!!!");
    let operationAnswer = await inquirer.prompt({
        name: "operation",
        message: "Please select option:",
        type: "list",
        choices: ["withdraw", "Check Balance"],
    });
    // Steps for withdrawal: If the requested withdrawal amount exceeds the available balance,
    // an "Insufficient funds" message will be displayed.
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your Amount",
                type: "number",
            },
        ]);
        // Checking the amount: If the requested withdrawal amount exceeds the available balance,
        // an "Insufficient funds" message will be displayed.
        if (amountAnswer.amount > myBalance) {
            console.log("Insufficient funds. You cannot withdraw more than your available balance.");
        }
        else {
            myBalance -= amountAnswer.amount;
            console.log("Your remaining Balance is: " + myBalance);
        }
    }
    else if (operationAnswer.operation === "Check Balance") {
        console.log(`Your balance is ${myBalance}`);
    }
    // Handling incorrect PIN: If the entered PIN is incorrect, an "Incorrect Pin Number" message will be displayed.
}
else {
    console.log("Incorrect Pin Number");
}
// Additional feature to check balance before withdrawal
//  =, += , -=
//     myBalance -= amountAnswer.amount;
//     console.log('Your remaining Balance is: ' + myBalance);
//   }
//   else if (operationAnswer.operation === "Check Balance") {
//     console.log(`Your balance is ${myBalance}`);
//   }
// } else {
//   console.log("Incorrect Pin Number");
