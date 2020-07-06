// const x = "x";
// const y = "y";
// console.log(x + y);

// console.log("My %s has %i years %f %o ", "cat", 2, 26.315);

// console.clear();

// const x = 1;
// const y = 2;
// const z = 3;

// console.count("The calue of x is " + x + "and has been checked");
// console.count("The value of y is " + y);
// console.count("The value of z is " + z);

// const oranges = ["orange", "orange"];
// const apples = ["just one apple"];
// oranges.forEach((fruit) => {
//   console.count(fruit);
// });

// apples.forEach((fruit) => {
//   console.log(fruit);
// });

// const function2 = () => {
//   console.trace();
// };
// const function1 = () => {
//   function2();
// };
// function1();

// const doSeomething = () => console.log("test");
// const measureDoingSomething = () => {
//   console.time("doSomething()");
//   doSeomething();
//   console.timeEnd("doSomething()");
// };

// measureDoingSomething();

// console.log("\x1b[33m%s\x1b[0m", "hi!");

const chalk = require("chalk");
console.log(chalk.bgWhiteBright("hi"));
