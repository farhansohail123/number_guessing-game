import chalk from "chalk"
import inquirer from "inquirer"
let SystemGeneratedNumber = Math.floor(Math.random() * 2);

let user = await inquirer.prompt([
    {
        name: "num1",
        type: "list",
        message: "Please Select the Number From 1 to 10 :",
        choices: ["0","1","2"],
    }
])


if (SystemGeneratedNumber === parseInt(user.num1)) {
    console.log(chalk.bold.greenBright("Congratulation You Won"));
}

else {
    console.log(chalk.bold.redBright("Sorry,Better Luck Next Time"));
}

