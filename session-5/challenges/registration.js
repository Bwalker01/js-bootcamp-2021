customRegistration = (registration) => {
  if (registration.length === 8 && registration.includes(" ")) {
    regAsArray = registration.split("");
    for (let i = 1; i < regAsArray.length; i++) {
      switch (regAsArray[i]) {
        case "A":
          regAsArray[i] = 4;
          break;
        case "B":
          regAsArray[i] = 8;
          break;
        case "S":
          regAsArray[i] = 5;
          break;
        case "E":
          regAsArray[i] = 3;
          break;
      }
    }
    formattedRegistration = regAsArray.join("");
    return formattedRegistration;
  } else {
    return "Registration must contain 8 characters with a space";
  }
};

const registration = "ABA KMEV";
formattedRegistration = customRegistration(registration);

console.log(formattedRegistration);
