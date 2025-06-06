let arr = [
  () => {
    console.log("Hello world!");
  },

  1,
  2,
  3,
  4,
  [
    "apple",
    "banana",
    "cherry",
    () => {
      console.log("Hi from inner array");
    },

    [33, 34, 35, 36, 37, 38, 39, 40, ["hi", "there"]],
  ],
];

// console.log(arr[5][1]);
arr[5][3]();
