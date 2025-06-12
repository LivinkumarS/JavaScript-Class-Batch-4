const btn = document.getElementsByTagName("button");
const ul = document.querySelector("ul");
const inp = document.querySelector("input");

function printHi(e) {
  console.log(e.target);
}

// inp.addEventListener("click",printHi)

// Array.from(btn).forEach((item, ind) => {
//   item.addEventListener("click", printHi);
// });

// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", (event) => {
//     console.log(event.target);
//   });
// }
