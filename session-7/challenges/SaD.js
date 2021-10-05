const searchAndDestroy = (array, ...remove) => {
  console.log(remove);
  console.log(array);
    array.forEach((item) => {
        included = false
        remove.forEach((char) => {
            if (item.includes("char")) {
                included = true
            }
        }
        if (!included) { item.remove }
            
        }
    }));
};

searchAndDestroy([1, 2, 3], 1, 2);
