// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function multiply() {
  
  let a = 5
  function multiplier() {
  
    let b = 6
    console.log(a * b)
  }
  return multiplier
}

let x = multiply()
let y = multiply()

x()
y()

console.dir(x)

/*Followed along a free code camp closure example, I do get an output but I'll need to wrap my head around them a bit more before I can be too creative/ original. */

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
