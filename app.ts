#! /usr/bin/env node

import inquirer from "inquirer";

const answer: {sentence: string} = await inquirer.prompt([{
    name : "sentence",
    type : "input",
    message : "Enter a sentence to count the words you want to count :"
}
])

const words = answer.sentence.trim().split(" ");
console.log(words);

console.log(`The number of words in the sentence is : ${words.length}`);