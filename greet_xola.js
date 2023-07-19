
import chalk from 'chalk';


import figlet from "figlet"

import greet from './greet.js'
const styledMessage = figlet.textSync(greet('Xola'));
console.log(styledMessage)


