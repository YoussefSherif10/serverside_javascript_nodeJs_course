import chalk from "chalk";
import * as util from "./util.js";

var stringArray = [
    'youssef',
    'love',
    'Javascript',
    'very',
    'much'
];

function getCapital(stringArray) {
    return util.getInUpperCase(stringArray);
}

function getLower(str) {
    return util.getInLowerCase(str);
}

function getPositipn(stringArray, str) {
    return util.getIndexPosition(stringArray, str);
}

console.log(chalk.red(getCapital(stringArray)));
console.log(getLower(stringArray));
console.log(getPositipn(stringArray, 'Javascript'));

console.log(chalk.red.underline('node'));
console.log(chalk.blue.underline.bold('underline'));
