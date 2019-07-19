const greeting = require('./greeting');
const log = require('./log');
const utility = require('./utility')

log.info(`node js started`);
greeting('ripon');
utility.sum(7,15);
utility.counter(utility.items);
