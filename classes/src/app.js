// interface describes the structure of an object
// interface keyword only exists in TS
var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person;
}());
// interfaces can type check an object
// interface can be used as a type
var user1; // user1 is a Greetable object
user1 = new Person('Max'); // user1 is a class that implements the interface Greetable
user1.greet('Hi there - I am');
console.log(user1);
var add;
add = function (n1, n2) {
    return n1 + n2;
};
