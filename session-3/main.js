//Creating object
const album = {
  title: "Montero",
  artist: "Lil Nas X",
  year: 2021,
  songs: [
    {
      name: "Montero",
    },
    {
      name: "Life After Salem",
    },
    {
      name: "That's what I want",
    },
  ],
  info() {
    return `${this.title} was made by ${this.artist} in ${this.year}.`;
  },
};

//Accessing object using DOT Notation
console.log(`Artist is ${album.artist}`);
console.log(`The album is called ${album.title}`);
//And it's functions
console.log(album.info());

//JSON
const product = {
  name: "Samsung TV",
  saleItem: false,
  dimensions: [
    {
      width: 1220,
      height: 900,
    },
  ],
};

let productAsStr = JSON.stringify(product);
console.log(productAsStr);

//JSON back to JSON Object
let productBackAsObject = JSON.parse(productAsStr);
console.log(productBackAsObject);
