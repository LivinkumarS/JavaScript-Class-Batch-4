// Objects

let obj = {
  fName: "Livin",
  lName: "kumar",
  age: 88,
  canVote: true,
  printName() {
    console.log(
      `Hi my name is ${this.fName}${this.lName}. I am ${this.age} years old!`
    );
  },
  list:[1,2,3,4,5]
};

// console.log(obj.age);
// console.log(obj["canVote"]);

// obj.printName();

// console.log(Object.values(obj));
// console.log(Object.keys(obj));

// JSON---> JS Object Notification.

let jsonValue=JSON.stringify(obj);

// console.log(JSON.parse(jsonValue));


console.log(obj["list"][4]);



