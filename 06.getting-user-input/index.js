const chalk = require('chalk')
const todos = require('./todos')

console.log(chalk.bold.blue(todos()));

const command  = process.argv[2];
if(command === 'add') {
    console.log(chalk.bold.blue(`add todos`));
} else if(command === 'edit') {
    console.log(chalk.bold.red(`edit todos`));
} else if(command === 'delete') {
    console.log(chalk.bold.redBright(`todo removed`));
} else {
    console.log(chalk.bold.green(`no action happened`));
}
