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
    const {
      location: { name },
      current: {
        temp_c,
        condition: { icon },
      },
    } = await response.json();
    console.log();
  } catch (err) {
    console.error(err);
  }
  temperatureHeading.innerHTML = `${temp_c}&deg;C`;
  locationNameHeading.innerHTLM = name;
  weatherIcon.src = icon;
};

submitBtn.addEventListener("click", getWeather);
