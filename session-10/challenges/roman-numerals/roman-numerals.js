export const toRomNum = (num) => {
  const numVals = [
    ["M", 1000],
    ["D", 500],
    ["C", 100],
    ["L", 50],
    ["X", 10],
    ["V", 5],
    ["I", 1],
  ];

  let start;

  for (let i = 0; i < numVals.length; i++) {
    if (numVals[i][1] <= num) {
      start = i;
      break;
    }
  }
  return numVals[start][0];
};
