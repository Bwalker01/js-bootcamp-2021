// Single Line Comment
/* 
Multi
Line
Comment
*/

var firstName = "Ben";
let lastName = "Walker";
const DoB = "29/10/2002";

let name = "My Name";
let $animal = "Lion";
let _age = "46";

const num = 12;
const dec = 1.2;
const neg = -12;
total = num + dec;

const thisIsStr = "This is a string!";
const stringnum = "12";
strtotal = stringnum + 2;

let animal = "cow";
let sentence = `My favourite animal is the ${animal}`;

let cond = true;

let n = null;
let und = undefined;
let und2;

let arr = ["John", "Lauren", "Art"];
let multiArrayTypes = [12, "Hello", 6.44];

const firstItem = arr[0];
const secondItem = arr[1];

arr.push("Jack");

const multiDimArray = [
  ["array1 item1", "array1 item2"],
  ["array2 item1", "array2 item2"],
];
let a1i2 = multiDimArray[0][1];

person = {
    name: "Ben Walker",
    age: 18,
    favFoods = ['Pasta','Pizza','Curry']
};

car = {
    manufacturer: 'Porsche',
    type: '911 Turbo',
    describe() {
        return `It is a ${this.manufacturer} ${type}`
    }
};

product = {
    name: "Keyboard",
    id: 153743,
    reviews: {
        name: "John",
        comment: "It was good",
        stars: 3
    }
};

const personAsStr = JSON.stringify(person);

const personBackAsObj = JSON.parse(personAsStr);