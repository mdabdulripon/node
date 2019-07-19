
const sum = function(a, b) {
    if(b) {              // ! if b available that means a is also available.
        console.log(`the sum of ${a} & ${b} is: ${a+b}`);
    } else if (a) {      // ! if only a available .
        console.log(`the sum of ${a} is: ${a}`);
    } else {             // ! for others.
        console.log(`the sum of is: 0`);
    }
}
const items = ['banana', 'mango', 'kiwi', 'charry'];
const counter = function(arr) {
    console.log(`there are ${arr.length} items are available`);
}

module.exports = {
    sum: sum,
    items: items,
    counter: counter
}

