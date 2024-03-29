#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    TRY: 32.07,
    SAR: 3.75,
    BHD: 0.38,
    IQD: 1308.17,
    AFN: 71.23,
    INR: 83.30,
    PKR: 277.54,
};
let condition = true;
while (condition) {
    console.log(chalk.rgb(255, 140, 0).bold(`\n"Welcome To Annum's Currency Converter"\n`));
    const userInput = await inquirer.prompt([
        {
            name: "convertFrom",
            type: "list",
            message: "Select Currency you want to convert From",
            choices: ['USD', 'TRY', 'SAR', 'BHD', 'IQD', 'AFN', 'INR', 'PKR']
        },
        {
            name: "convertTo",
            type: "list",
            message: "Select Currency you want to convert To",
            choices: ['USD', 'TRY', 'SAR', 'BHD', 'IQD', 'AFN', 'INR', 'PKR']
        },
        {
            name: "convertAmount",
            type: "number",
            message: "Enter Amount",
        },
    ]);
    let convertFromAmount = currency[userInput.convertFrom];
    let convertToAmount = currency[userInput.convertTo];
    let amount = userInput.convertAmount;
    // console.log(convertFromAmount)
    // console.log(convertToAmount)
    // // console.log(amount)
    let baseAmount = amount / convertFromAmount;
    // console.log(baseAmount);
    let convertedAmount = baseAmount * convertToAmount;
    console.log(chalk.yellowBright(`\n"Congratulation"\n`));
    console.log(chalk.greenBright(`you Successfully converted`), chalk.rgb(0, 255, 255)(`${amount} ${userInput.convertFrom}`), chalk.greenBright(`into`), chalk.rgb(102, 102, 255)(`${convertedAmount.toFixed(2)} ${userInput.convertTo}.\n`));
    const runProgram = await inquirer.prompt({
        name: "run",
        type: "confirm",
        message: "Do you want to continue",
        default: true
    });
    condition = runProgram.run;
}
console.log(chalk.yellowBright(`\n"Thank You For Using My Currency converter"\n`));
