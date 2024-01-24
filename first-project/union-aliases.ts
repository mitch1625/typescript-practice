// type alias can be used to store the union type so you do not have to continously redefine them
type Combinable = number | string;   // use the type keyword. the name can be whatver you want
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(input1: Combinable, 
  input2: Combinable, 
  resultConversion: ConversionDescriptor // using a union type combined with literal type
  ) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  
  // if (resultConversion === 'as-number') { // resultConversion checks the types and returns the result how we want
  //   return +result
  // } else {
  //   return result.toString()
  // }
  return result
}

const combinedAges = combine(30,26, 'as-number'); 
console.log(combinedAges);

const combinedStringAges = combine('30','26', 'as-number');
console.log(combinedStringAges)

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames)

// Unions allow different kinds of inputs to be entered with the |
// Runtime check might be required working with unions (line 3) depending on the logic

type User = { name: string, age: number}
const u1: User = {name:'Max', age:30}
function greet(user:User) {
  console.log('Hi, I am ' + user.name)
}

function isOlder(user:User, checkAge:number) {
  console.log(checkAge > user.age)
  return checkAge > user.age
}

greet(u1)
isOlder(u1, 30)