// var greet = require('./greet');
// greet();

function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
}

var john = new Person('John','Doe');
var jane = new Person('Jane','Doe');
console.log(john.__proto__ === jane.__proto__);
jane.greet();