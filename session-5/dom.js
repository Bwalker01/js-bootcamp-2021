/*//Selectors
const headingElement = document.getElementById("heading");
console.log(headingElement.innerHTML);
headingElement.innerHTML = "CHANGED";
const paragraphElement = document.getElementsByClassName("paragraph");
console.log(headingElement.innerHTML);

//QuerySelector
const para = document.querySelector(".paragraph");
console.log(para.innerText);

para.innerText = "Hello World!";

//QuerySelectorAll
const allListItems = document.querySelectorAll(".item");
console.log(allListItems);
allListItems.forEach(function (item) {
  console.log(item.innerText);
});

//Select using a data attribute
const img = document.querySelector("[data-custom-image-name]");
console.log(img);
*/

//Event Handling

headingListener = () => {
  hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  console.log("You clicked the heading.");
  document.querySelector("#heading").style.color = `#${
    hex[Math.floor(Math.random() * 15)]
  }${hex[Math.floor(Math.random() * 15)]}${
    hex[Math.floor(Math.random() * 15)]
  }`;
  console.log(document.querySelector("#heading").style.color);
};

const numberList = document.querySelector("#myList");
const listAdderBtn = document.getElementById("listAdderBtn");
listAdderBtn.addEventListener("click", function () {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  //   listItem.id = "myNewId";
  listItem.innerHTML = `Item ${document.querySelectorAll(".item").length + 1}`;
  listItem.class = "item";
  numberList.appendChild(listItem);
});

changeimage1 = () => {
  document.querySelector("[data-custom-image-name]").src =
    "../Practice/rock-paper-scissors/Rock.png";
};

changeimage2 = () => {
  document.querySelector("[data-custom-image-name").src =
    "../Practice/rock-paper-scissors/Paper.png";
};

changeimage3 = () => {
  document.querySelector("[data-custom-image-name]").src =
    "../Practice/rock-paper-scissors/Scissors.png";
};

logMe = () => {
  console.log(this);
};
