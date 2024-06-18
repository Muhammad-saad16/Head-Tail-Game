import inquirer from "inquirer";
import chalk from "chalk";
interface Coin {
    side: string;
}

let coins: Coin[] = [
    { side: "Head" },
    { side: "Tail" }
];
// Randomly select either 0 (Head) or 1 (Tail)
const randomSideIndex = Math.floor(Math.random() * coins.length);
const randomSide = coins[randomSideIndex].side;


//console.log(randomSide);

console.log(chalk.bold.italic.yellow("Welcome to Coin Flip Game!"));

const answer = await inquirer.prompt([
    {
        message: "Select one of the sides of the coin to perform action",
        type: "list",
        name: "userChoice",
        choices: ["Head", "Tail"]
    }
]);

if (answer.userChoice === randomSide) {
    console.log(chalk.bold.italic.green("Congratulations! You guessed the right side."));
} else {
    console.log(chalk.bold.italic.red("You guessed the wrong side."));
}

console.log(chalk.bold.italic.yellow("Thanks for playing!"));