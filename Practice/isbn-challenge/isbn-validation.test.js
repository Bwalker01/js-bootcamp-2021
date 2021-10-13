import { expect, it } from "@jest/globals";
import expectExport from "expect";
import {
  isValid10String,
  isValid13String,
  checkISBN10Code,
  checkISBN13Code,
} from "./isbn-validation.js";

describe("ISBN Validators", () => {
  describe("Validating ISBN-10 String", () => {
    describe("Invalid Inputs", () => {
      it("Should return False if there is a letter in the string", () => {
        expect(isValid10String("04719S8697")).toBe(false);
        expect(isValid10String("L JKH WAJKL N")).toBe(false);
        expect(isValid10String("3-97d-fs978-6")).toBe(false);
      });
      it("Should return False if the string is too long", () => {
        expect(isValid10String("38970293846")).toBe(false);
        expect(isValid10String("347598345692874")).toBe(false);
        expect(isValid10String("234234246375342423426347")).toBe(false);
      });
      it("Should return False if the string is too short", () => {
        expect(isValid10String("")).toBe(false);
        expect(isValid10String("389702938")).toBe(false);
        expect(isValid10String("2")).toBe(false);
      });
      it("Should return False if the string has invalid symbols between sections", () => {
        expect(isValid10String("0!471!95869!7")).toBe(false);
        expect(isValid10String("2(987-35029 8")).toBe(false);
        expect(isValid10String("3£897^02938?4")).toBe(false);
      });
      it("Should return False if the string has symbols in the wrong places", () => {
        expect(isValid10String("-047195-8697")).toBe(false);
        expect(isValid10String("298 73 5029 8")).toBe(false);
        expect(isValid10String("3 89 7 0293 8 4")).toBe(false);
      });
      it("Should return False if the string has a check digit that's not a number or X", () => {
        expect(isValid10String("047195869R")).toBe(false);
        expect(isValid10String("298735029J")).toBe(false);
        expect(isValid10String("389702938z")).toBe(false);
      });
    });
    describe("Valid Inputs", () => {
      it("Should return True for a string of just 10 digits", () => {
        expect(isValid10String("0471958697")).toBe(true);
        expect(isValid10String("2987350298")).toBe(true);
        expect(isValid10String("3897029384")).toBe(true);
      });
      it("Should return True for a string of 10 digits and appropriate spaces", () => {
        expect(isValid10String("0 471 60695 2")).toBe(true);
        expect(isValid10String("1 432 34757 4")).toBe(true);
        expect(isValid10String("5 234 57832 7")).toBe(true);
      });
      it("Should return True for a string of 10 digits and appropriate dashes", () => {
        expect(isValid10String("0-470-84525-2")).toBe(true);
        expect(isValid10String("5-234-45632-2")).toBe(true);
        expect(isValid10String("7-452-30498-7")).toBe(true);
      });
      it("Should return True for a string of 9 digits and a check digit of 10 (X)", () => {
        expect(isValid10String("047084525x")).toBe(true);
        expect(isValid10String("5 234 45632 X")).toBe(true);
        expect(isValid10String("7-452-30498-x")).toBe(true);
      });
    });
  });
  describe("Validating ISBN-13 String", () => {
    describe("Invalid Inputs", () => {
      it("Should return False if there is a letter in the string", () => {
        expect(isValid13String("9Y804G00590V9 ")).toBe(false);
        expect(isValid13String("KJA F AWJ GJEKS J")).toBe(false);
        expect(isValid13String("64G-B-5F-EGS74U-4")).toBe(false);
      });
      it("Should return False if the string is too long", () => {
        expect(isValid13String("32432643636574856846")).toBe(false);
        expect(isValid13String("97804700590294")).toBe(false);
        expect(isValid13String("2342342463753-")).toBe(false);
      });
      it("Should return False if the string is too short", () => {
        expect(isValid13String("")).toBe(false);
        expect(isValid13String("97804700590X")).toBe(false);
        expect(isValid13String("2")).toBe(false);
      });
      it("Should return False if the string has invalid symbols between sections", () => {
        expect(isValid13String("978%0%471%48648%0")).toBe(false);
        expect(isValid13String("978@0 13-149505(0")).toBe(false);
        expect(isValid13String("978:0>262£13472$9")).toBe(false);
      });
      it("Should return False if the string has symbols in the wrong places", () => {
        expect(isValid13String("97 8047  00 590 29")).toBe(false);
        expect(isValid13String("978  0 471 48648 0")).toBe(false);
        expect(isValid13String("97-80-47-0-059-029-")).toBe(false);
      });
      it("Should return False if the string has a check digit thats not a number or X", () => {
        expect(isValid13String("97 8047  00 590 2F")).toBe(false);
        expect(isValid13String("978  0 471 48648 r")).toBe(false);
        expect(isValid13String("97-80-47-0-059-029U")).toBe(false);
      });
    });
    describe("Valid Inputs", () => {
      it("Should return True for a string of just 13 digits", () => {
        expect(isValid13String("9780470059029")).toBe(true);
        expect(isValid13String("3290472071237")).toBe(true);
        expect(isValid13String("2418976123362")).toBe(true);
      });
      it("Should return True for a string of 13 digits and appropriate spaces", () => {
        expect(isValid13String("978 0 471 48648 0")).toBe(true);
        expect(isValid13String("213 4 234 23421 3")).toBe(true);
        expect(isValid13String("432 2 542 45356 2")).toBe(true);
      });
      it("Should return True for a string of 13 digits and appropriate dashes", () => {
        expect(isValid13String("978-0596809485")).toBe(true);
        expect(isValid13String("978-0-13-149505-0")).toBe(true);
        expect(isValid13String("978-0-262-13472-9")).toBe(true);
      });
      it("Should return True for a string of 12 digits and a check digit of 10 (X)", () => {
        expect(isValid13String("978059680948X")).toBe(true);
        expect(isValid13String("978-0-13-149505-x")).toBe(true);
        expect(isValid13String("978 0 262 13472 X")).toBe(true);
      });
    });
  });
  describe("Verifying the check digit (ISBN-10)", () => {
    describe("Invalid Inputs", () => {
      it("Should throw an error for invalid codes", () => {
        expect(() => {
          checkISBN10Code("293804705987240589273");
        }).toThrow();
        expect(() => {
          checkISBN10Code("978-0-13-149505-0");
        }).toThrow();
        expect(() => {
          checkISBN10Code("1 7 5 8 0 54 3 8 3");
        }).toThrow();
      });
      it("Should return False for codes with an invalid check digit", () => {
        expect(checkISBN10Code("0471958693")).toBe(false);
        expect(checkISBN10Code("0 471 60695 5")).toBe(false);
        expect(checkISBN10Code("0-470-84525-1")).toBe(false);
        expect(checkISBN10Code("0-321-14653-8")).toBe(false);
      });
    });
    describe("Valid Inputs", () => {
      it("Should return True for a valid code", () => {
        expect(checkISBN10Code("0471958697")).toBe(true);
        expect(checkISBN10Code("0 471 60695 2")).toBe(true);
        expect(checkISBN10Code("0-470-84525-2")).toBe(true);
        expect(checkISBN10Code("0-321-14653-0")).toBe(true);
      });
      it("Should return True for a valid code with a check digit of 10 (X)", () => {
        expect(checkISBN10Code("938472923X")).toBe(true);
        expect(checkISBN10Code("938472923x")).toBe(true);
      });
    });
  });
  describe("Verifying the check digit (ISBN-13)", () => {
    describe("Invalid Inputs", () => {
      it("Should throw an error for invalid codes", () => {
        expect(() => {
          checkISBN13Code("AAAAAAAAAAAAAAAA");
        }).toThrow();
        expect(() => {
          checkISBN13Code("9 78 0 4 700 590 29");
        }).toThrow();
        expect(() => {
          checkISBN13Code("97-80-13-149%505-0");
        }).toThrow();
      });
      it("Should return false for a code with an invalid check digit", () => {
        expect(checkISBN13Code("978047005902X")).toBe(false);
        expect(checkISBN13Code("978-0-262-13472-3")).toBe(false);
        expect(checkISBN13Code("978-8-352-13472-8")).toBe(false);
        expect(checkISBN13Code("1230475659023")).toBe(false);
      });
    });
    describe("Valid Inputs", () => {
      it("Should return True for a valid code", () => {
        expect(checkISBN13Code("9780470059029")).toBe(true);
        expect(checkISBN13Code("978-0596809485")).toBe(true);
        expect(checkISBN13Code("978-0-262-13472-9")).toBe(true);
      });
      it("Should return True for a valid code with a check digit of 10 (X)", () => {
        expect(checkISBN13Code("978 0 471 48648 X")).toBe(true);
        expect(checkISBN13Code("978-0-13-149505-X")).toBe(true);
      });
    });
  });
});
