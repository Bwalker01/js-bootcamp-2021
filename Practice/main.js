const places = [
  {
    name: "Kingston",
    country: "Jamaica",
    timezoneHours: -5,
    timezoneMinutes: 0,
    DST: false,
  },
  {
    name: "Baltimore",
    country: "Maryland USA",
    timezoneHours: -4,
    timezoneMinutes: 0,
    DST: true,
  },
  {
    name: "Differdange",
    country: "Luxembourg",
    timezoneHours: 2,
    timezoneMinutes: 0,
    DST: true,
  },
  {
    name: "Leeds",
    country: "England",
    timezoneHours: 1,
    timezoneMinutes: 0,
    DST: true,
  },
  {
    name: "Melbourne",
    country: "Victoria Australia",
    timezoneHours: 10,
    timezoneMinutes: 0,
    DST: true,
  },
  {
    name: "Strasbourg",
    country: "France",
    timezoneHours: 2,
    timezoneMinutes: 0,
    DST: true,
  },
  {
    name: "Adelaide",
    country: "South Australia",
    timezoneHours: 9,
    timezoneMinutes: 30,
    DST: true,
  },
];

let place = places[Math.floor(Math.random() * places.length)];

const renderTime = function (place) {
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
  document.getElementById(
    "place"
  ).innerHTML = `${place.name}, ${place.country}`;
};

renderTime(place);
setInterval(renderTime, 1000, place);
