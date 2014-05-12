// I paired [by myself, with: Albert Alquisola] on this challenge.

// Pseudocode
// 1.Create a variable called secretNumber and assign a numeric value to it
// 2.Change the value of secretNumber to 7
// 3.Create a variable called password and set it to the value "string"
// 4.Change the value of password to "just open the door"
// 5.Create a variable called allowedIn and set it to a boolean value of true.
// 6.Change the value of allowedIn to false
// 7.Create a variable called members and assign an empty array
// 8.Add in 'John' as the first value in the members array
// 9.Add in 'Mary' as the fourth value in the members array
//

// __________________________________________
// Write your code below.
var secretNumber = 5;
secretNumber = 7;
var password = "string";
password = "just open the door";
var allowedIn = true;
allowedIn = false;
var members = [];
members[0] = 'John';
members[3] = 'Mary';

// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ['John',,,'Mary'];

// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// The pseudocode was helpful in explaining the error messages and deciding on how to tackle the problem.
// There was really no problems since this challenge was pretty easy.
// We didnt learn any new tricks, the syntax was pretty close to Ruby.
// We were very confident with each learning competencies.
// I enjoyed figuring out what the error message was and fixing it 
// It was slightly tedious that we had to change the values to something else when the instructions
// could have just told us exactly what we needed to do such as "The value of secret number should be 7"
// right off the bat instead of "The value of the secretNumber should be a number".
// 


// __________________________________________
// Driver Test Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

