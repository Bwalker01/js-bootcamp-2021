// Timers

//Set Timeout
setTimeout(function () {
  console.log("Testing.");
}, 5000);
// ======= OR (^^Worse) ======
const TIMER_SECONDS = 5000;
const sayMessage = () => {
  console.log("This is the message.");
};
setTimeout(sayMessage, TIMER_SECONDS);

//Set Interval
const timer = setInterval(sayMessage, 1000);

setTimeout(function () {
  clearInterval(timer);
}, 10000);

console.log("Start");

console.log("End");
