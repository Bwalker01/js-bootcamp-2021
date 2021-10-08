export const celToFahr = (arg) => {
  if (typeof arg !== "number") {
    throw new Error("Input must be a number");
  }

  const result = (arg * 9) / 5 + 32;

  return result;
};

export const fahrToCel = (arg) => {
  if (typeof arg !== "number") {
    throw new Error("Input must be a number");
  }

  const result = (arg - 32) * (5 / 9);

  return result;
};

export const kelToCel = (arg) => {
  if (typeof arg !== "number") {
    throw new Error("Input must be a number");
  }

  const result = arg - 273.15;

  return result;
};

export const celToKel = (arg) => {
  if (typeof arg !== "number") {
    throw new Error("Input must be a number");
  }

  const result = arg + 273.15;

  return result;
};

export const fahrToKel = (arg) => {
  if (typeof arg !== "number") {
    throw new Error("Input must be a number");
  }

  const result = (arg - 32) * (5 / 9) + 273.15;
  return result;
};

export const kelToFahr = (arg) => {
  if (typeof arg !== "number") {
    throw new Error("Input must be a number");
  }

  const result = (arg - 273.15) * (9 / 5) + 32;

  return result;
};
