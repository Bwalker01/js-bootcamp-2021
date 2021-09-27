let total = 0;
for (let i = 1; i < 501; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    // if (i % 3 === 0 && i % 5 === 0) {
    //   console.log(i, "***");
    // } else {
    console.log(i);
    // }
    total += i;
  }
}
console.log(total);
