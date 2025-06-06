// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// newArr= [12,13,14,15,16,17,18,19,20,21,22];

// let newArr = arr.map((item, ind) => {
//   return (item + ind) >= (item * ind);
// });

// console.log(newArr);

// exe --10---> (1,0), (2,1), (3,2), (4,3), (5,4), (6,5), (7,6), (8,7), (9,8), (10,9);

//[12,13,14,15,16,17,18,19,20,21,22]
//[`Hello for 1 times`, `Hello for 2 times`, `Hello for 3 times`, `Hello for 4 times`, `Hello for 5 times`, `Hello for 6 times`, `Hello for 7 times`, `Hello for 8 times`, `Hello for 9 times`, `Hello for 10 times`]

//[true, true, false, false, false, false, false, false, false, false]

// let arr = [
//   32, 34, 23, 54, 34, 76, 34, 12, 34, 23, 45, 78, 43, 67, 100, 101, 23, 12, 3,
//   2, 7, 3,
// ];

// let voteArr = arr.map((age) => {
//   return age >= 18 ? "can vote" : "cannot vote";
// });
// console.log(voteArr);

// let voteArr

// console.log(["can vote", "can vote", "can vote", ..."cannot vote"]);

// Filter

// let arr = [101, 23, 12, 3, 2, 7, 3];

// let newArr = arr.filter((item, ind) => {
//   return ind; //boolean
// });

// console.log(newArr);

//[101]

//(101,0), (23,1), (12,2), (3,3), (2,4), (7,5), (3,6)

// Reduce

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let val = arr.reduce((acc, item, ind) => {
//   return acc * item;
// }, 1);

// console.log(val);

// (1,0)-->1000, (2,1)--->999, (3,2)-->997, (4,3)-->994, (5,4)-->990, (6,5)-->985, (7,6)-->21, (8,7)-->28, (9,8)-->36,  (10,9)--->45------>(945)

let filteredArr = arr.filter((item, ind) => {
  return item % 2 === 0; //false
});

//[2, 4, 6, 8, 10]

console.log(filteredArr);
