#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright.bold("\t\t*----------------------------*"));
console.log(chalk.redBright.bold("\t\t*   Welcome to ATM !!!!!!     *"));
console.log(chalk.blueBright.bold("\t\t*----------------------------*"));
let myBalance = 50000; // Dollar
let myPin = "";
let operationSelection = null;
async function startATM() {
    let pinAnswer = await inquirer.prompt({
        name: "pin",
        message: (chalk.green("\nEnter your pin:")),
        type: "number",
    });
    myPin = pinAnswer.pin.toString();
    let confirmPin = await inquirer.prompt({
        name: "confirmPin",
        message: (chalk.yellow("\nConfirm your pin:")),
        type: "number",
    });
    if (confirmPin.confirmPin === pinAnswer.pin) {
        console.log(chalk.magentaBright.bold("\n\t\tYou logged into your account successfully!\n"));
        // Proceed with ATM operations
        await main();
    }
    else {
        console.log(chalk.bgRedBright("\n\t\tPINs do not match. Please try again.\n"));
        // Restart the ATM process
        startATM();
    }
}
async function main() {
    while (true) {
        let option = await inquirer.prompt([
            {
                name: "operation",
                message: (chalk.green("\nPlease Select Option:")),
                type: "list",
                choices: ["Transaction", "Check balance", "Exit"],
            }
        ]);
        if (option.operation === "Check balance") {
            console.log(chalk.magentaBright.bold.underline(`\n\tYour current balance is:${myBalance}`));
        }
        else if (option.operation === "Exit") {
            console.log(chalk.redBright.bold("\t\t*----------------------------*"));
            console.log(chalk.blue("\t\t    Thank you for using ATM"));
            console.log(chalk.redBright.bold("\t\t*----------------------------*"));
            return; // Exiting the ATM process
        }
        else if (option.operation === "Transaction")
            while (true) {
                operationSelection = await inquirer.prompt([
                    {
                        name: "operation",
                        message: (chalk.yellow("\nPlease Select Option:")),
                        type: "list",
                        choices: ["Transfer", "Withdraw", "Fast Cash", "Bills Payment"],
                    },
                ]);
                if (operationSelection.operation === "Transfer") {
                    let transferAmount = await inquirer.prompt([
                        {
                            name: "beneficiary",
                            message: (chalk.green("\nEnter Your Benficiary Name:")),
                            type: "string",
                        },
                        {
                            name: "accountNumber",
                            message: (chalk.yellow("\nEnter Your Benficiary Account Number:")),
                            type: "number",
                        },
                        {
                            name: "amount",
                            message: (chalk.blue("\nEnter Your Transfer Amount:")),
                            type: "number",
                        }
                    ]);
                    if (transferAmount.amount > myBalance) {
                        console.log(chalk.bgRedBright.bold("\n\t\tOpps!!! Sorry! Your transaction does not proceed"));
                        console.log(chalk.bgRedBright.bold("\t\t\tInsufficient Balance"));
                        console.log(chalk.bgRedBright.bold(`\t\t\t"your balance is:"${myBalance}`));
                        console.log(chalk.bgRedBright.bold(`\t\tDo not select your transfer amount more than ${myBalance}!\n`));
                    }
                    else {
                        myBalance -= transferAmount.amount;
                        console.log(chalk.yellowBright.bold("\n\tYour amount has been transfered Successfully!!!!"));
                        console.log(chalk.magentaBright.bold.underline(`\n\tYour remaining balance is ${myBalance}`));
                    }
                    printTransactionDate();
                }
                else if (operationSelection.operation === "Withdraw") {
                    // Withdraw operation logic
                    let amountWithdraw = await inquirer.prompt({
                        name: "amount",
                        message: (chalk.yellow("\nEnter Your Amount:")),
                        type: "number",
                    });
                    if (amountWithdraw.amount > myBalance) {
                        console.log(chalk.bgRedBright.bold("\n\t\tOpps!!! Sorry! Your transaction does not proceed"));
                        console.log(chalk.bgRedBright.bold("\t\t\tInsufficient Balance"));
                        console.log(chalk.bgRedBright.bold(`\t\t\t"your balance is:"${myBalance}`));
                        console.log(chalk.bgRedBright.bold(`\t\tDo not select your transfer amount more than ${myBalance}!\n`));
                    }
                    else {
                        myBalance -= amountWithdraw.amount;
                        console.log(chalk.yellowBright.bold("\n\tYour Amount Withdrawal Successfully!!!"));
                        printTransactionDate();
                        console.log(chalk.magentaBright.bold.underline("\n\tYour remaining balance is: ", myBalance));
                    }
                }
                else if (operationSelection.operation === "Fast Cash") {
                    // Fast Cash operation logic
                    let fastCash = await inquirer.prompt([
                        {
                            type: "list",
                            name: "amount",
                            message: (chalk.blue("\nSelect Your Amount")),
                            choices: [1000, 2000, 3000, 5000, 10000, 20000],
                        },
                    ]);
                    if (fastCash.amount > myBalance) {
                        console.log(chalk.bgRedBright.bold("\t\tOpps!!! Sorry! Your transaction does not proceed"));
                        console.log(chalk.bgRedBright.bold("\t\t\tInsufficient Balance"));
                        console.log(chalk.bgRedBright.bold(`"\t\t\tyour balance is:"${myBalance}`));
                        console.log(chalk.bgRedBright.bold(`\t\tDo not select your transfer amount more than ${myBalance}!`));
                    }
                    else if (fastCash.amount === 1000) {
                        myBalance -= fastCash.amount;
                        console.log(chalk.yellowBright.bold("\n\tYour Transaction has been done Successfully!!!"));
                        console.log(chalk.magentaBright.bold.underline("\n\tYour remaining balance is: ", myBalance));
                        printTransactionDate();
                    }
                    else if (fastCash.amount === 2000) {
                        myBalance -= fastCash.amount;
                        console.log(chalk.yellowBright.bold("\n\tYour Transaction has been done Successfully!!!"));
                        console.log(chalk.magentaBright.bold.underline("\n\tYour remaining balance is: ", myBalance));
                        printTransactionDate();
                    }
                    else if (fastCash.amount === 3000) {
                        myBalance -= fastCash.amount;
                        console.log(chalk.yellowBright.bold("\n\tYour Transaction has been done Successfully!!!"));
                        console.log(chalk.magentaBright.bold.underline("\n\tYour remaining balance is: ", myBalance));
                        printTransactionDate();
                    }
                    else if (fastCash.amount === 5000) {
                        myBalance -= fastCash.amount;
                        console.log(chalk.yellowBright.bold("\n\tYour Transaction has been done Successfully!!!"));
                        console.log(chalk.magentaBright.bold.underline("\n\tYour remaining balance is: ", myBalance));
                        printTransactionDate();
                    }
                    else if (fastCash.amount === 10000) {
                        myBalance -= fastCash.amount;
                        console.log(chalk.yellowBright.bold("\n\tYour Transaction has been done Successfully!!!"));
                        console.log(chalk.magentaBright.bold.underline("\n\tYour remaining balance is: ", myBalance));
                        printTransactionDate();
                    }
                    else if (fastCash.amount === 20000) {
                        myBalance -= fastCash.amount;
                        console.log(chalk.yellowBright.bold("\n\tYour Transaction has been done Successfully!!!"));
                        console.log(chalk.magentaBright.bold.underline("\n\tYour remaining balance is: ", myBalance));
                        printTransactionDate();
                    }
                }
                else if (operationSelection.operation === "Bills Payment") {
                    // Bills Payment operation logic
                    let billPayment = await inquirer.prompt([
                        {
                            type: "list",
                            name: "amount",
                            message: (chalk.magenta("\nSelect your Bill:")),
                            choices: ["Gas", "Electricity", "Telephone", "Water Swerage"],
                        },
                    ]);
                    if (billPayment.amount === "Gas") {
                        let gasBill = await inquirer.prompt([
                            {
                                name: "consumerNumber",
                                message: (chalk.green("\nEnter Bill Consumer Number:")),
                                type: "number",
                            },
                            {
                                name: "amount",
                                message: (chalk.yellow("\nEnter Your Amount:")),
                                type: "number",
                            }
                        ]);
                        if (gasBill.amount > myBalance) {
                            console.log(chalk.bgRedBright.bold("\n\t\tOpps!!! Sorry! Your gas bill payment does not proceed"));
                            console.log(chalk.bgRedBright.bold("\t\t\tInsufficient Balance"));
                            console.log(chalk.bgRedBright.bold(`\t\t\t"your balance is:"${myBalance}`));
                            console.log(chalk.bgRedBright.bold(`\t\tDo not select your payment amount more than ${myBalance}\n`));
                        }
                        else {
                            myBalance -= gasBill.amount;
                            console.log(chalk.yellowBright.bold("\n\tYour Gas Bill has been paid Successfully!!!"));
                            console.log(chalk.magentaBright.bold.underline(`\n\tYour remaining balance is ${myBalance}!`));
                        }
                        printTransactionDate();
                    }
                    if (billPayment.amount === "Electricity") {
                        let electricityBill = await inquirer.prompt([
                            {
                                name: "consumerNumber",
                                message: (chalk.green("\nEnter Bill Consumer Number:")),
                                type: "number",
                            },
                            {
                                name: "amount",
                                message: (chalk.yellow("\nPlease Enter Your Amount:")),
                                type: "number",
                            }
                        ]);
                        if (electricityBill.amount > myBalance) {
                            console.log(chalk.bgRedBright.bold("\n\t\tOpps!!! Sorry! Your electricity bill payment does not proceed"));
                            console.log(chalk.bgRedBright.bold("\t\t\tInsufficient Balance"));
                            console.log(chalk.bgRedBright.bold(`\t\t\t"your balance is:"${myBalance}`));
                            console.log(chalk.bgRedBright.bold(`\t\tDo not select your payment amount more than ${myBalance}!\n`));
                        }
                        else {
                            myBalance -= electricityBill.amount;
                            console.log(chalk.yellowBright.bold("\n\tYour Electricity Bill has been paid Successfully!!!"));
                            console.log(chalk.magentaBright.bold.underline(`\n\tYour remaining balance is ${myBalance}`));
                        }
                        printTransactionDate();
                    }
                    if (billPayment.amount === "Telephone") {
                        let telephoneBill = await inquirer.prompt([
                            {
                                name: "consumerNumber",
                                message: (chalk.green("\nEnter Bill Consumer Number:")),
                                type: "number",
                            },
                            {
                                name: "amount",
                                message: (chalk.yellow("\nPlease Enter Your Amount:")),
                                type: "number",
                            }
                        ]);
                        if (telephoneBill.amount > myBalance) {
                            console.log(chalk.bgRedBright.bold("\n\t\tOpps!!! Sorry! Your telephone bill payment does not proceed"));
                            console.log(chalk.bgRedBright.bold("\t\t\tInsufficient Balance"));
                            console.log(chalk.bgRedBright.bold(`\t\t\t"your balance is:"${myBalance}`));
                            console.log(chalk.bgRedBright.bold(`\t\tDo not select your payment amount more than ${myBalance}!\n`));
                        }
                        else {
                            myBalance -= telephoneBill.amount;
                            console.log(chalk.yellowBright.bold("\n\tYour Telephone Bill has been paid Successfully!!!"));
                            console.log(chalk.magentaBright.bold.underline(`\n\tYour remaining balance is ${myBalance}`));
                        }
                        printTransactionDate();
                    }
                    if (billPayment.amount === "Water Swerage") {
                        let waterSwerageBill = await inquirer.prompt([
                            {
                                name: "consumerNumber:",
                                message: (chalk.green("\nEnter Bill Consumer Number")),
                                type: "number",
                            },
                            {
                                name: "amount",
                                message: (chalk.yellow("\nPlease Enter Your Amount:")),
                                type: "number",
                            }
                        ]);
                        if (waterSwerageBill.amount > myBalance) {
                            console.log(chalk.bgRedBright.bold("\n\t\tOpps!!! Sorry! Your waterswerage bill payment does not proceed"));
                            console.log(chalk.bgRedBright.bold("\t\t\tInsufficient Balance"));
                            console.log(chalk.bgRedBright.bold(`\t\t\t"your balance is:"${myBalance}`));
                            console.log(chalk.bgRedBright.bold(`\t\tDo not select your payment amount more than ${myBalance}!\n`));
                        }
                        else {
                            myBalance -= waterSwerageBill.amount;
                            console.log(chalk.yellowBright.bold("\n\tYour Water Swerage Bill has been paid Successfully!!!"));
                            console.log(chalk.magentaBright.bold.underline(`\n\tYour remaining balance is ${myBalance}`));
                        }
                        printTransactionDate();
                    }
                   
                }
            
                // Ask if the user wants to perform another transaction
                let anotherTransaction = await inquirer.prompt({
                    name: "anothertransaction",
                    type: "confirm",
                    message: (chalk.green("\nWould you like to proceed again?")),
                });
                if (!anotherTransaction.anothertransaction) {
                    console.log(chalk.redBright.bold("\t\t*----------------------------*"));
                    console.log(chalk.blue.bold("\t\t   Thank you for using ATM"));
                    console.log(chalk.redBright.bold("\t\t*----------------------------*"));
                    return;
                }
            }
    }
}
function printTransactionDate() {
    const currentDate = new Date().toLocaleString();
    console.log(chalk.green(`\nTransaction Date: ${currentDate}\n`));
}
async function ATM() {
    await startATM();
}
ATM();
