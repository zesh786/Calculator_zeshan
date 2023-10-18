#! /usr/bin/env node
//calculator:
import inquirer from "inquirer";
import { sum } from "./functions.js";
import { subtract } from "./functions.js";
import { divide } from "./functions.js";
import { module } from "./functions.js";
import { percentage } from "./functions.js";
import { multiply } from "./functions.js";
import showBanner from "node-banner";
import gradient from "gradient-string";
let answers = [
    {
        name: "num1",
        type: "number",
        message: gradient.rainbow("Enter num1: "),
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter a valid number!";
            }
            return true;
        }
    },
    {
        name: "num2",
        type: "number",
        message: gradient.instagram("Enter num2: "),
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter a valid number!";
            }
            return true;
        }
    },
    {
        name: "operations",
        type: "list",
        choices: ["Add", "Subtract", "multiplication", "division", "module", "percentage"],
        message: gradient.teen("select operation: ")
    }
];
// let {num1, num2, operations} = await inquirer.prompt(answers);
// //we will use modules here. we will create a function in a separate file.
// if(operations === "Add"){
//     console.log("The sum of two numbers is : ", sum(num1, num2));
// }
// //Whenever we use await, we should write it in a function.
let answer = [
    { name: "again",
        type: "confirm",
        message: "Do you want to perform another operation?",
    }
];
(async () => {
    await showBanner('Calculator', 'This calculator can perform addition, subtraction, multiplication and division', 'red', 'blue');
})();
async function calculator() {
    let condition = true;
    while (condition) {
        let { num1, num2, operations } = await inquirer.prompt(answers);
        if (operations === "Add") {
            console.log("The sum of two numbers is : ", sum(num1, num2));
        }
        else if (operations === "subtract") {
            console.log("The difference of two numbers is : ", subtract(num1, num2));
        }
        else if (operations === "division") {
            console.log("The dividend of two numbers is : ", divide(num1, num2));
        }
        else if (operations === "multiplication") {
            console.log("The multiplication of two numbers is : ", multiply(num1, num2));
        }
        else if (operations === "module") {
            console.log("The module of two numbers is : ", module(num1, num2));
        }
        else if (operations === "percentage") {
            console.log(`Your percentage is ${percentage(num1, num2)}%`);
        }
        let { again } = await inquirer.prompt(answer);
        condition = again;
    }
}
//for delay we will use settimeout function:
setTimeout(() => {
    calculator();
}, 1000);
