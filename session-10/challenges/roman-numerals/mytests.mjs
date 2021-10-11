const numVals = [
  ["M", 1000],
  ["D", 500],
  ["C", 100],
  ["L", 50],
  ["X", 10],
  ["V", 5],
  ["I", 1],
];
const num = 6;
let start;

for (let i = 0; i < numVals.length; i++) {
  console.log(numVals[i][1], numVals[i][0]);
  if (numVals[i][1] <= num) {
    start = i;
    console.log(num, "~=", numVals[i][1], "==> done");
    break;
  }
}
