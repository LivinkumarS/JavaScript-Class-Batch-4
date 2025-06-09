let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "the", "apple"];

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
  list: [1, 2, 3, 4, 5],
};

for (let i in obj) {
  console.log(obj[i]);
}
