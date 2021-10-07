export const celToFahr = (arg) => {
  if (typeof arg !== "number") {
    throw new Error("Input must be a number", { cause: arg });
  }

  const result = (arg * 9) / 5 + 32;

  return result;
};

export const fahrToCel = (arg) => {
  if (typeof arg !== "number") {
    throw new Error("Input must be a number", { cause: arg });
  }

  const result = (arg - 32) * (5 / 9);

  return result;
};
