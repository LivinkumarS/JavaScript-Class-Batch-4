// Named Function

// printName();

function printName() {
  console.log("hello Guys");
  console.log("This is");
  console.log("Livinkumar S");
  console.log("Here");
}

// Function Expression

const printAge = () => {
  console.log("My age is");
  console.log(82);
};

const printHello = () => {
  console.log("Hello");
};

// for (let i = 0; i < 10; i++) {
//   printHello();
// }

function add(a, b) {
  console.log(a + b);
}

// add(55, 45);
// add(155, 45);

const startProcess = (a) => {
  console.log("Started!");
  console.log("Step1");
  console.log("Step2");

  if (a <= 10) {
    return;
  }

  console.log("Step3");
  console.log("Step4");
  console.log("Step5");
  console.log("Ended");
};

// startProcess(11);

function mul(a, b) {
  let ans = a * b; //100
  return ans; //100
}

// console.log(mul(10, 10) + 100 - 200);

function sayHi(name) {
  //name = "mithun"
  return `Hi from ${name}`;
}

// for (let i = 0; i < 10; i++) {
//   let str = sayHi(prompt("Enter Your Name: "));
//   console.log(str);
// }

// Calback Function

function process(cbfunc, a) {
  //af, 30
  cbfunc(a+30);  //60
  console.log("ended");
}

// function printSqr(num) {
//   console.log(num * num);
// }

process((num) => {
  console.log(num*num);
}, 30);
