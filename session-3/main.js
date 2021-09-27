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

//---------------------------------------------

//In-built Functions for Strings
const firstName = "John Doe";

console.log(firstName);
console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

const john = firstName.substr(0, 4);
console.log(john);

const doe = firstName.substr(5);
console.log(doe);

const phoneNumber = "0113 563 453";

const phoneParts = phoneNumber.split(" ");
console.log(phoneNumber, phoneNumber.length);
console.log(phoneParts, phoneParts.length);

console.log(phoneParts.join("-"));

const emailAddress = "foo@bar.com";
const indexOfAtSymbol = emailAddress.indexOf("@"); //.indexOf("$") (returns -1)
console.log(indexOfAtSymbol);

//In-built Functions for Arrays
//High Order Functions - Can take another function as an argument or return a function as it's result

const countries = [
  "England",
  "France",
  "Germany",
  "Iceland",
  "Malaysia",
  "Spain",
  "Australia",
  "Austria",
  "Zimbabwe",
  "Italy",
  "Nigeria",
  "Egypt",
  "Holland",
  "America",
  "Mexico",
  "Canada",
  "Luxembourg",
  "Turkey",
  "Hungary",
];
// --Filter - Passes all values in array that match the given criteria into seperate string
const matchedCountries = countries.filter(function (country) {
  console.log("Current country is", country);

  return country.toLowerCase().endsWith("a");
});
console.log("Matched: ", matchedCountries);

// -- --OR
myFunc = (country) => {
  return country.length > 6;
};
const lengthyCountries = countries.filter(myFunc);
console.log(lengthyCountries);

// -- --OR
const ACountries = countries.filter((country) => country.startsWith("A"));
console.log(ACountries);

//return is implied so not always needed
//passing in function is also implied so it can be taken as a function without declaring one

// --Map
const people = [
  { name: "Boris Johnson", title: "Mop Man" },
  { name: "Margaret Thatcher", title: "Woman Power" },
];
console.log(people);

const upperCaseNames = people.map((person) => {
  return person.name.toUpperCase();
});
console.log(upperCaseNames);

const allTogether = people.map((person) => {
  return {
    name: person.name.toUpperCase(),
    title: person.title,
    dateCreated: new Date().toLocaleDateString(),
    timeCreated: new Date().toLocaleTimeString(),
  };
});
console.log(allTogether);

// --Some (Tells whether the value is within [true/false])
const fruits = ["apple", "pear", "grape", "banana", "cucumber"];

const isApple = fruits.some((fruit) => {
  return fruit === "apple";
});

console.log(isApple);

// -- --OR
const isPear = fruits.some((fruit) => fruit === "pear");

console.log(isPear);

// --With Objects
const footballTeams = [
  {
    name: "Manchester United",
    nationalities: ["Portugese", "English", "French"],
  },
  {
    name: "Liverpool",
    nationalities: ["Egyptian", "Brazillian", "English"],
  },
  {
    name: "Leeds",
    nationalities: ["French", "German"],
  },
];

const hasEnglishPlayers = footballTeams.some((team) =>
  team.nationalities.includes("English")
);

console.log(hasEnglishPlayers);

const hasFrenchPlayers = footballTeams.filter((team) =>
  team.nationalities.includes("French")
);
console.log(hasFrenchPlayers);

// --Sort
let letters = ["z", "a", "q", "w", "e", "r", "t", "y"];
console.log(letters.sort());

let numbers = [45, 36, 74, 4, 35, 64, 3, 63, 7, 33, 6];
console.log(numbers);
const sortedNumbers = numbers.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  }
  return -1;
});
console.log(numbers);

let animals = ["lion", "Zebra", "turtle"];

console.log(
  animals.sort(function (a, b) {
    let aL = a.toLowerCase();
    let bL = b.toLowerCase();
    return aL == bL ? 0 : aL > bL ? 1 : -1;
  })
);

// Length & Index Of
console.log(animals.length);
console.log(animals.indexOf("lion"));

// Push
let places = [];

places.push({
  name: "Barcelona",
  population: 10_000_000,
});

places.push({
  name: "Bristol",
  population: 500_000,
});

// Pop
const bristol = places.pop();
console.log(bristol);

places.push({
  name: "Leeds",
  population: 1_000_000,
});
console.log(places);
//If Statement
/* if (a === b) {
  return 0;
} else if (a > b) {
  return 1;
} else {
  return -1;
} */
// --OR
// return a == b ? 0 : a > b ? 1 : -1;
