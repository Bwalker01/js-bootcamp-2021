import { addAllNumbers, divideNumbers } from "./calculator";

test("Should add all numbers", () => {
  // AAA - Arrange, Act, Assert

  //ARRANGE:
  const arr = [1, 2, 3];

  //ACT:
  const result = addAllNumbers(arr);

  //ASSERT:
  expect(result).toBe(6);
});

test("Should divide both numbers", () => {
  const num1 = 2;
  const num2 = 2;

  const result = divideNumbers(num1, num2);

  expect(result).toBe(1);
});

describe("Calculator:", () => {
  it("Should add all numbers", () => {
    const arr = [1, 5, 8];
    const result = addAllNumbers(arr);
    expect(result).toBe(14);
  });
  it("Should add all numbers", () => {
    const arr = [2, 4, 10];
    const result = addAllNumbers(arr);
    expect(result).toBe(16);
  });
  it("Should divide both numbers", () => {
    const num1 = 2;
    const num2 = 4;
    const result = divideNumbers(num1, num2);
    expect(result).toBe(2);
  });
  it("Should divide both numbers", () => {
    expect(divideNumbers(3, 6)).toBe(2);
  });
});

describe.skip("Calculator:", () => {
  describe("Totalling Arrays:", () => {
    describe("Valid Inputs: ", () => {
      it("Should total the array", () => {
        const arr = [3, 4, 5];
        const result = addAllNumbers(arr);
        expect(result).toBe(12);
      });
      it("Should total the array", () => {
        const arr = [1, 2, 3];
        const result = addAllNumbers(arr);
        expect(result).toBe(6);
      });
    });
    describe("Invalid Inputs", () => {
      it("Should result in NaN", () => {
        const arr = ["Apple", 4, Infinity];
        const result = addAllNumbers(arr);
        expect(result).toBe(Infinity);
      });
      it("Should throw error when dividing by zero", () => {
        expect(() => divideNumbers(0, 2)).toThrow("Can't divide by 0");
      });
    });
  });
});
