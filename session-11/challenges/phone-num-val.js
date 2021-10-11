const phoneNumVal = (number) => {
  regExp = /\(?\+?([44]{2}|[0])?\)\s?\d{3}\s?\d{3}\s?\d\s?\d{4,6}/g;
  return regExp.test(number);
};

console.log(phoneNumVal("07856766543"));
console.log(phoneNumVal("0785 676 6543"));
console.log(phoneNumVal("+447856766543"));
console.log(phoneNumVal("+44 7856766543"));
console.log(phoneNumVal("(44) 7856766543"));
console.log(phoneNumVal("Apple"));
