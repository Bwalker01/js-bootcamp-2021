import { toRomNum } from "./roman-numerals";

describe("Converting Between Numbers and Roman Numerals", () => {
  describe("Converting Num to RomNum", () => {
    describe("Simple Numbers", () => {
      it("Should return Is for each number <4", () => {
        expect(toRomNum(1)).toBe("I");
        expect(toRomNum(2)).toBe("II");
        expect(toRomNum(3)).toBe("III");
      });
      it("Should return V for 5", () => {
        expect(toRomNum(5)).toBe("V");
      });
      it("Should return X for 10", () => {
        expect(toRomNum(10)).toBe("X");
      });
      it("Should return L for 50", () => {
        expect(toRomNum(50)).toBe("L");
      });
      it("Should return C for 100", () => {
        expect(toRomNum(100)).toBe("C");
      });
      it("Should return D for 500", () => {
        expect(toRomNum(500)).toBe("D");
      });
      it("Should return M for 1000", () => {
        expect(toRomNum(1000)).toBe("M");
      });
    });
    describe("Combining letters", () => {
      it("Should return V and Is relevant to each number 6-8", () => {
        expect(toRomNum(6)).toBe("VI");
        expect(toRomNum(7)).toBe("VII");
        expect(toRomNum(8)).toBe("VIII");
      });
      it("Should return the appropriate values for numbers 11-18", () => {
        expect(toRomNum(11)).toBe("XI");
        expect(toRomNum(12)).toBe("XII");
        expect(toRomNum(13)).toBe("XIII");
        expect(toRomNum(15)).toBe("XV");
        expect(toRomNum(16)).toBe("XVI");
        expect(toRomNum(17)).toBe("XVII");
        expect(toRomNum(18)).toBe("XVIII");
      });
      it("Should return the appropriate values for numbers 31-38", () => {
        expect(toRomNum(31)).toBe("XXXI");
        expect(toRomNum(32)).toBe("XXXII");
        expect(toRomNum(33)).toBe("XXXIII");
        expect(toRomNum(35)).toBe("XXXV");
        expect(toRomNum(36)).toBe("XXXVI");
        expect(toRomNum(37)).toBe("XXXVII");
        expect(toRomNum(38)).toBe("XXXVIII");
      });
      it("Should return the appropriate values for numbers 61-68", () => {
        expect(toRomNum(61)).toBe("LXI");
        expect(toRomNum(62)).toBe("LXII");
        expect(toRomNum(63)).toBe("LXIII");
        expect(toRomNum(65)).toBe("LXV");
        expect(toRomNum(66)).toBe("LXVI");
        expect(toRomNum(67)).toBe("LXVII");
        expect(toRomNum(68)).toBe("LXVIII");
      });
    });
    describe("1 multiple less than next tier", () => {
      it("Should return IV for 4", () => {
        expect(toRomNum(4)).toBe("IV");
      });
      it("Should return XL for 40", () => {
        expect(toRomNum(40)).toBe("XL");
      });
      it("Should return CD for 400", () => {
        expect(toRomNum(400)).toBe("CD");
      });
    });
    describe("1 less than next tier", () => {
      it("Should return IX for 9", () => {
        expect(toRomNum(9)).toBe("IX");
      });
      it("Should return XLIX for 49", () => {
        expect(toRomNum(49)).toBe("XLIX");
      });
      it("Should return XCIX for 99", () => {
        expect(toRomNum(99)).toBe("XCIX");
      });
      it("Should return CMXCIX for 999", () => {
        expect(toRomNum(999)).toBe("CMXCIX");
      });
    });
    describe("Extra tests.", () => {
      it("Should return the correct values for these conversions", () => {
        expect(toRomNum(75)).toBe("LXXV");
        expect(toRomNum(689)).toBe("DCLXXXIX");
        expect(toRomNum(92)).toBe("XCII");
        expect(toRomNum(500)).toBe("D");
        expect(toRomNum(42)).toBe("XLII");
      });
    });
  });
});
