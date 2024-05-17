#!/usr/bin/env node
import inquirer from "inquirer";
//user pin name or account number//
let myBalance = 5000;
let pinNumber = 567;
//get user experience//
console.log("Welcome to code with Sadia - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin number"
    }
]);
if (pinAnswer.pin === pinNumber) {
    console.log('Pin is correct, you login successfully');
    console.log(`current balance is, ${myBalance}`);
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation",
            choices: ["withdraw amount", "check balance"]
        }
    ]);
    if (operationAnswer.operation === "withdraw amount") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount",
            }
        ]);
        if (amountAnswer.amount > myBalance) {
            console.log("insuffecient amount");
        }
        else {
            myBalance -= amountAnswer.amount;
            console.log(`${amountAnswer.amount}, is withdraw succesfully}`);
            console.log(`your remaining balance is, ${myBalance}`);
        }
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(`your current amount is, ${myBalance}`);
    }
}
