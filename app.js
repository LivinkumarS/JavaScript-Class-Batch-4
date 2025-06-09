// Destructuring

// let fnum = arr[0];
// let mnum = arr[1];
// let lnum = arr[2];

// let [fnum, mnum, lnum] = arr;

// console.log(lnum);

// let { fName, lNAme, list } = obj;

// console.log(list);

let arr = [243, 234, 35, 34, 3, 2134, 46, 234, 678];

let arr1 = [1, ...arr, 2, 3];

// arr1 = arr1.concat(arr);
// console.log(arr1);

let obj = {
  fName: "saala",
  lNAme: "kumar",
  list: [23, 34, 32, 35],
};

let obj1 = {
  ...obj,
  id: "1652375174",
};

// console.log([...arr, ...obj1.list]);

let { list, ...rest } = obj;
console.log(rest);
console.log(list);
