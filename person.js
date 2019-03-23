
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    gretting() {
        console.log(`My name is ${this.name} and im ${this.age} years olds`)
    }
};
module.exports = Person;