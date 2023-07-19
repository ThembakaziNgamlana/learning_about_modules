
import chalk from 'chalk';
import greet from './greet.js'
const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)



import figlet from "figlet"
const Message = figlet.textSync(greet('Xola'));
console.log(Message)


