// let h1 = document.querySelector("h1");

// h1.style.backgroundColor = "red";
// h1.style.color = "blue";
// h1.style.fontSize = "50px";
// h1.style.fontWeight = "900";

let newElement = document.createElement("a");

newElement.setAttribute("href", "https://www.thestackly.com");
newElement.textContent = "Go To Our Website";

let li = document.createElement("li");
li.appendChild(newElement);
let ul = document.querySelector("ul");

ul.insertBefore(li, ul.firstElementChild.nextElementSibling.nextElementSibling);

li.remove();
ul.remove();
