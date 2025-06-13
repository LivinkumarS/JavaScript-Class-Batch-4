let inp = document.querySelector("input");
let ul = document.querySelector("ul");

document.getElementById("add").addEventListener("click", () => {
  let theWord = inp.value;
  inp.value = "";
  if (theWord === "") {
    return;
  }
  let newLi = document.createElement("li");
  newLi.innerHTML = `${theWord} <button>del</button>`;
  ul.appendChild(newLi);

  document.querySelector("button");

  newLi.querySelector("button").addEventListener("click", () => {
    newLi.remove();
  });
});

// let ul=document.querySelector("ul")

// console.log(ul.querySelector("button"));
