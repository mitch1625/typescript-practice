let userInput: unknown // unknown is unknown because we do not know what the user will pass it
// we can store anything in unknown and get no compilation errors
let userName: string

userInput = 5,
userInput = 'Max'
// userName = userInput this line will throw an error. because userInput is not garuanteed to be a string
if (typeof userInput === 'string') { // must use an extra type check with unknown to assign unknown to a value with a fixed type
  userName = userInput
}


// never is another type a function can return

function generateError(message:string, code:number): never { // this function never stores a return value
  throw {message: message, errorCode: code};
}

generateError('Error occured', 500)
