// interface describes the structure of an object
// interface keyword only exists in TS


// interface inheritance
interface Named {
  readonly name: string
}

// can inherit from multiple interfaces
interface Greetable extends Named { // interfaces only define structures, not concrete values
  greet(phrase:string): void;
}


class Person implements Greetable { // implements keyword makes a class follow an interface structure
  name:string
  age = 30
  constructor(n:string) {
    this.name = n
  }

  greet(phrase:string) {
    console.log(phrase + ' ' + this.name)
  }
} 

// interfaces can type check an object
// interface can be used as a type
let user1: Greetable; // user1 is a Greetable object

user1 = new Person('Max') // user1 is a class that implements the interface Greetable


user1.greet('Hi there - I am')
console.log(user1)

// Interface can be used as a contract that a class has to adhere to


// can create function types with interfaces
interface AddFn { 
  (a:number, b:number): number // (arguments): return type
}

let add: AddFn
add = (n1:number, n2:number) => {
  return n1 + n2
}
