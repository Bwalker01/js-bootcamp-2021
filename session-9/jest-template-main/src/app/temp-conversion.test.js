import { celToFahr, fahrToCel } from "./temp-conversion";

describe("Celcius to Fahrenheit", () => {
  describe("Input Validation", () => {
    it("Should throw error if input not a number", () => {
      expect(() => celToFahr("")).toThrow();
      expect(() => celToFahr("0")).toThrow();
      expect(() => celToFahr(null)).toThrow();
      expect(() => celToFahr(undefined)).toThrow();
    });
  });

  describe("Output Validation", () => {
    it("should return the correct conversion", () => {
      expect(celToFahr(0)).toBeCloseTo(32);
      expect(celToFahr(20)).toBeCloseTo(68);
      expect(celToFahr(35)).toBeCloseTo(95);
    });
  });
});

describe("Fahrenheit to Celcius", () => {
  describe("Input Validation", () => {
    it("Should throw error if input not a number", () => {
      expect(() => fahrToCel("")).toThrow();
      expect(() => fahrToCel("0")).toThrow();
      expect(() => fahrToCel(null)).toThrow();
      expect(() => fahrToCel(undefined)).toThrow();
    });
  });

  describe("Output Validation", () => {
    it("should return the correct conversion", () => {
      expect(fahrToCel(32)).toBeCloseTo(0);
      expect(fahrToCel(68)).toBeCloseTo(20);
      expect(fahrToCel(95)).toBeCloseTo(35);
    });
  });
});
