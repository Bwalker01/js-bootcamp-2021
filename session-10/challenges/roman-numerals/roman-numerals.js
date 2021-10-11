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
    if (numVals[i][1] < num + 1) {
      start = i;
      break;
    }
  }

  if (!start && start !== 0) {
    throw new Error("Couldn't find a start point.");
  }

  let romNumsVal = "";
  let cont = true;

  while (cont) {
    if (Math.floor(num / numVals[start][1]) === 4) {
      romNumsVal += numVals[start][0] + numVals[start - 1][0];
    } else if (num === 9) {
      romNumsVal += "IX";
      break;
    } else if (String(num).startsWith(9)) {
      romNumsVal += numVals[start + 1][0] + numVals[start - 1][0];
      num = String(num).substring(1);
      num = Number(num);
      console.log(num);
    } else {
      for (let i = 0; i < Math.floor(num / numVals[start][1]); i++) {
        romNumsVal += numVals[start][0];
      }
    }
    num = num % numVals[start][1];
    if (num === 0) {
      cont = false;
    } else {
      start++;
    }
  }

  return romNumsVal;
};
