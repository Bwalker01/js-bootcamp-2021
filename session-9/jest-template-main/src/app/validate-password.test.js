/*
Validate passwords to ensure that:

 - They are at least 8 characters in length
 - Contain at least one character
 - Contain at least one number
*/

import { validatePassword } from "./validate-password";

describe("Validate Password", () => {
  describe("False Returns", () => {
    it("should return false when password is empty", () => {
      expect(validatePassword("")).toBe(false);
    });
    it("should return false when length of password is less than 8", () => {
      const password = "l2sa56";

      expect(validatePassword(password)).toBe(false);
    });
    it("should return false when only numbers in password", () => {
      const password = "12345678";

      expect(validatePassword(password)).toBe(false);
    });
    it("should return false when only characters in password", () => {
      const password = "asdfghjkl";

      expect(validatePassword(password)).toBe(false);
    });
    it("should return false when only capital characters in password", () => {
      const password = "ABCDEFGHIJKLM";

      expect(validatePassword(password)).toBe(false);
    });
    it("should return false when no lowercase characters in password", () => {
      const password = "GF46423FQ";

      expect(validatePassword(password)).toBe(false);
    });
    it("should return false when no capital characters in password", () => {
      const password = "as4fgh82l";

      expect(validatePassword(password)).toBe(false);
    });
  });
  describe("True Returns", () => {
    it("should return true", () => {
      const password = "5jA4jv67";
      expect(validatePassword(password)).toBe(true);
    });
    it("should return true", () => {
      const password = "6Jhdk!dawjkj35wGAW";
      expect(validatePassword(password)).toBe(true);
    });
    it("should return true", () => {
      const password = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAa7";
      expect(validatePassword(password)).toBe(true);
    });
    it("should return true", () => {
      const password = "57478473456876djADFfw";
      expect(validatePassword(password)).toBe(true);
    });
  });
});
