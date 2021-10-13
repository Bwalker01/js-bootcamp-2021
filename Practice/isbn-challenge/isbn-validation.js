export const isValid10String = (code) => {
  const regExp = /^[0-9]\s?-?[0-9]{3}\s?-?[0-9]{5}\s?-?[0-9X]$/;
  return regExp.test(code.toUpperCase());
};

export const isValid13String = (code) => {
  const regExp =
    /^[0-9]{3}\s?-?[0-9]\s?-?[0-9]{2}\s?-?[0-9]\s?-?[0-9]{5}\s?-?[0-9X]$/;
  return regExp.test(code.toUpperCase());
};

export const checkISBN10Code = (code) => {
  if (!isValid10String(code)) {
    throw new Error(`Given code is not a valid ISBN code: ${code}`);
  } else {
    code = code.split(""); //Turn the given code into an array
    const checkDigit = code.pop(); //Remove and save checkdigit
    const nums = /[0-9]/; //Acceptable numbers
    code = code.filter((char) => nums.test(char)); //Filter out any symbols
    let start = 0;
    code = code.map((char) => {
      start++;
      return char * start;
    }); //Multiply each digit by it's place
    let total = 0; //Set total
    code.forEach((digit) => {
      total += digit;
    }); //Find total
    let check = total % 11; //Find the modulo of 11 of the total
    return check == checkDigit; //Returns true if valid, false if not
  }
};
