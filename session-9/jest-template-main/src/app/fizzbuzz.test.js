import { fizzBuzz, giveArray } from "./fizzbuzz";

describe("FizzBuzz", () => {
  it("Should return 'fizz' if number is multiple of 3", () => {
    expect(fizzBuzz(3)).toBe("fizz");
    expect(fizzBuzz(9)).toBe("fizz");
    expect(fizzBuzz(18)).toBe("fizz");
  });

  it("Should return 'buzz' if number is multiple of 5", () => {
    expect(fizzBuzz(5)).toBe("buzz");
    expect(fizzBuzz(10)).toBe("buzz");
  });

  it("Should return 'fizzbuzz' if number is multiple of 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
    expect(fizzBuzz(30)).toBe("fizzbuzz");
  });

  it("Should return the given number as a string if not a multiple of 3 or 5", () => {
    expect(fizzBuzz(4)).toBe("4");
    expect(fizzBuzz(11)).toBe("11");
  });

  it("Negative numbers should return their respective value", () => {
    expect(fizzBuzz(-5)).toBe("buzz");
    expect(fizzBuzz(-3)).toBe("fizz");
    expect(fizzBuzz(-15)).toBe("fizzbuzz");
    expect(fizzBuzz(-16)).toBe("-16");
    expect(fizzBuzz(-23)).toBe("-23");
    expect(fizzBuzz(-7)).toBe("-7");
  });
});

describe("giveArray", () => {
  it("Should provide all outputs given start and end values", () => {
    expect(giveArray(1, 20)).toBe(
      "1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19 buzz"
    );
    expect(giveArray(4, 10)).toBe("4 buzz fizz 7 8 fizz buzz");
  });

  it("Should throw an error if the start or end values are not numbers", () => {
    expect(() => giveArray(1, "Apples")).toThrow("Inputs must be numbers");
  });

  it("Should work with negative inputs", () => {
    expect(giveArray(-4, 5)).toBe("-4 fizz -2 -1 fizzbuzz 1 2 fizz 4 buzz");
    expect(giveArray(-10, -2)).toBe("buzz fizz -8 -7 fizz buzz -4 fizz -2");
  });

  it("Should throw an Error when the end is lower than the start", () => {
    expect(() => giveArray(10, 0)).toThrow("End must be higher than the start");
    expect(() => giveArray(5, -10)).toThrow(
      "End must be higher than the start"
    );
    expect(() => giveArray(-5, -10)).toThrow(
      "End must be higher than the start"
    );
  });

  it("Should give single correct value when inputs are equal", () => {
    expect(giveArray(-4, -4)).toBe("-4");
  });

  it("Should always give a string", () => {
    expect(giveArray(-5, -5)).toBe("buzz");
    expect(giveArray(-7, -7)).toBe("-7");
  });
});
