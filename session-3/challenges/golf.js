const names = [
  "Hole in one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Quit",
];

const par = 4;
const strokes = 8;

strokes === 1
  ? console.log(names[0])
  : strokes <= par - 2
  ? console.log(names[1])
  : strokes === par - 1
  ? console.log(names[2])
  : strokes === par
  ? console.log(names[3])
  : strokes === par + 1
  ? console.log(names[4])
  : strokes === par + 2
  ? console.log(names[5])
  : console.warn(names[6]);

let myObj = { firstName: "John", lastName: "Doe" };
console.warn(myObj);
