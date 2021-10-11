const messageRE = /hello/;

//Verifies if there is a match and returns true/false
if (messageRE.test("hello world")) {
}

const phrase = `The fat cat ran down the street
It was searching for a mouse to eat`;

const atRE = /at/g;

console.log(atRE.test(phrase));
