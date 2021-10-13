let code = "047195869";

code = code.split(""); //Turn the given code into an array
console.log(code);
nums = /[0-9]/;
code = code.filter((char) => nums.test(char)); //Filter out any symbols
console.log(code);
let start = 0;
code = code.map((char) => {
  start++;
  return char * start;
}); //Multiply each digit by it's place
console.log(code);
let total = 0; //Set total
code.forEach((digit) => {
  total += digit;
}); //Find total
console.log(total);
let check = total % 11; //Find the modulo of 11 of the total
console.log(check);
