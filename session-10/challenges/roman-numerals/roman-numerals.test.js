import { toRomNum } from "./roman-numerals";

describe("Converting Between Numbers and Roman Numerals", () => {
  describe("Converting Num to RomNum", () => {
    it("Should return I if passed number is 1", () => {
      expect(toRomNum(1)).toBe("I");
    });
  });
});
