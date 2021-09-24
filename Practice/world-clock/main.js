let place = places[Math.floor(Math.random() * places.length)];
let city = place.name[Math.floor(Math.random() * place.name.length)];

const renderTime = function (place, city) {
  let time = new Date();
  formattedTime = {
    hours: time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
  };
  offset = time.getTimezoneOffset();
  offsethours = Math.floor(offset / 60);
  offsetminutes = -(offset % 60);
  if ((place.DST && time.getMonth() < 4) || time.getMonth() > 10) {
    place.timezoneHours = place.timezoneHours - 1;
  }
  newFormattedTime = {
    hours: formattedTime.hours + offsethours + place.timezoneHours,
    minutes: formattedTime.minutes + offsetminutes + place.timezoneMinutes,
    seconds: formattedTime.seconds,
  };
  if (newFormattedTime.minutes > 59) {
    newFormattedTime.minutes = newFormattedTime.minutes - 60;
    newFormattedTime.hours = newFormattedTime.hours + 1;
  } else if (newFormattedTime.minutes < 0) {
    newFormattedTime.minutes = 60 + newFormattedTime.minutes;
    newFormattedTime.hours = newFormattedTime.hours - 1;
  }
  if (newFormattedTime.hours > 24) {
    newFormattedTime.hours = newFormattedTime.hours - 24;
  } else if (newFormattedTime.hours < 0) {
    newFormattedTime.hours = 24 + newFormattedTime.hours;
  }
  time = newFormattedTime;
  if (time.hours < 10) {
    time.hours = `0${time.hours}`;
  }
  if (time.minutes < 10) {
    time.minutes = `0${time.minutes}`;
  }
  if (time.seconds < 10) {
    time.seconds = `0${time.seconds}`;
  }

  document.getElementById(
    "time"
  ).innerHTML = `${time.hours}:${time.minutes}:${time.seconds}`;
  document.getElementById("place").innerHTML = `${city}, ${place.country}`;
};

renderTime(place, city);
setInterval(renderTime, 1000, place, city);
