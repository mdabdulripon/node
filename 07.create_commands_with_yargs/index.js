const chalk = require('chalk')
const yargs = require('yargs')

const todos = require('./todos')

console.log(chalk.bold.blue(todos()));


// ! create add command
yargs.command({
    command: 'add',
    describe: 'Add a new todo',
    handler: function() {
        console.log(`adding a new note.`);
    }
});

// ! create delete command
yargs.command({
    command:'delete',
    describe: 'delete a todo',
    handler: function() {
        console.log(`removing a todo`)
    }
});


// ! create read command
yargs.command({
    command:'read',
    describe: 'reading a todo',
    handler: function() {
        console.log(`reading a todo`)
    }
});

// ! create list command
yargs.command({
    command:'list',
    describe: 'list all todos',
    handler: function() {
        console.log(`lasting all todos`)
    }
});

console.log(`yargs`, yargs.argv);
 