numInc = () => {
  text = document.querySelector("#timesClicked");
  num = text.innerHTML;
  num = Number(num);
  text.innerHTML = num + 1;
};
