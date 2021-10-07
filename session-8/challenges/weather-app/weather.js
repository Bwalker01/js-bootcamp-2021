const weatherAPIKey = `e6e50124bb09436690c142757210610`;
const weatherAPIUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}`;

//DOM Elements
const weatherResult = document.querySelector(".weather-result");
const temperatureHeading = document.getElementById("temperature");
const locationNameHeading = document.getElementById("locationName");
const weatherIcon = document.querySelector("#weather-icon");
const submitBtn = document.querySelector(".submit-btn");

const getWeather = async (event) => {
  event.preventDefault();
  const placeNameField = document.getElementById("placeId");

  const requestUrl = `${weatherAPIUrl}&q=${placeNameField.value}&api=no`;

  try {
    const response = await fetch(requestUrl);
    resp = await response.json();
    console.log(resp);
    const {
      location: { name, country },
      current: {
        temp_c,
        condition: { icon },
      },
    } = resp;
    temperatureHeading.innerHTML = `${temp_c}&deg;C`;
    locationNameHeading.innerHTML = `${name}, ${country}`;
    weatherIcon.src = icon;
    if (icon.includes("night")) {
      document.body.style.backgroundColor = "darkblue";
      console.log("night");
    } else if (icon.includes("day")) {
      document.body.style.backgroundColor = "#FFFF60";
      console.log("day");
    } else {
      document.body.style.backgroundColor = "black";
      console.log("Can't tell.");
    }
  } catch (err) {
    console.error(err);
  }
};

submitBtn.addEventListener("click", getWeather);
