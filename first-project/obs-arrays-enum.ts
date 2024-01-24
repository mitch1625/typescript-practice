// const person: {
//   name: string
//   age: number
//   hobbies: string
//   role: [number, string] <== This syntax used to define tuple. can give more strictness on expected types of data
// } 

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN = 5, READ_ONLY, AUTHOR}; // enum assigns labels to numbers

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

// person.role.push('admin') // **PUSH IS AN EXCEPTION TO THE TUPLE LENGTH. Push overrides the length requirement and will add the element
// person.role = [0,'admin','user'] * Defining a tuple that does NOT meet requirement length will cause an error

let favoriteActivity: string[]; // makes favoriteActivity be an array of strings
favoriteActivity = ['Sports'] // no error
// favoriteActivity = ['Sports', 1]  will throw an error

// let favoriteActivity: any[]; anything can be passed in
// favoriteActivity = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) { 
  console.log(hobby.toUpperCase())    // TS knows hobby will be a string. Can perform any string method on hobby
}

if (person.role === Role.AUTHOR) {
  console.log('is author')
}
