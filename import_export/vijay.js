function printHello(fname, lname) {
  console.log(`Hello... from ${fname}${lname}!`);
}

let fullName = "Joseph Vijay";
let noOfMovies = 68;
let age = 51;

function sayHello() {
  console.log("Hello!");
}

export default printHello;
export { fullName, noOfMovies, age, sayHello };
