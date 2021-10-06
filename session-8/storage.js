//Local Storage
localStorage.setItem("name", "foo");
localStorage.setItem("cutlery", "spoon");

const nameValue = localStorage.getItem("name");
console.log(nameValue);

const countries = ["France", "Germany"];
localStorage.setItem("countries", JSON.stringify(countries));

countriesValue = localStorage.getItem("countries");
console.log("Countries from Storage =>", JSON.parse(countriesValue));

const product = {
  name: "Coke",
  size: "Small",
  price: 3.99,
};

localStorage.setItem("product", JSON.stringify(product));

localStorage.removeItem("cutlery");

//Session Storage
sessionStorage.setItem("id", 239874);

//Cookies
