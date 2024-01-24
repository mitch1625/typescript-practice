// Hover over the function and you can see the return type after the : at the end
// TS has a return type void. Void is the standard for functions that do not return a value
// if a function returns nothing, use void instead of undefined.
// if use undefined, TS will expect an empty return statement

// Function types are types that describe a function regarding the parameters and return value of that function

function add(n1: number, n2: number) {
  return n1 + n2
} 

function printResult(num: number) { // has a return type of void
  console.log('Result: ' + num)
}

function addAndHandle(n1:number, n2:number, cb: (num:number) => void) { // cb is a function. may not return anything. number is required parameter
  const result = n1 + n2
  cb(result)
}

printResult(add(5,12))

// let combinedValues: Function // whatever is stored in combinedValues HAS to be a function
let combinedValues: (a:number, b:number) => number // return type ios specified on the right side of the arrow
// parameters are added on the left side
// Function types allow us to describe what type of function we want to use. i.e. expected value in parameter or callback
combinedValues = add;
console.log(combinedValues(8,8))

addAndHandle(10, 20, (result)=>{
  console.log(result)
  // since cb is expected to return void, nothing will happen with the return value. it is not going to be used
  return result
})