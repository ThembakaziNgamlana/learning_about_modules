// import chalk from 'chalk';

// import greet from './greet.js'


// const styledMessage = chalk.bgGreen.black(greet('Xola'));

// console.log(styledMessage)

// var figlet = require("figlet");

import figlet from "figlet"

import greet from './greet.js'
const styledMessage = figlet.textSync(greet('Xola'));
console.log(styledMessage)

