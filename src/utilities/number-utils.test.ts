import { NumberUtils } from "utilities/number-utils";

describe("NumberUtils", () => {
  describe("#parseInt", () => {
    it("when subject is already a number literal, then returns the value as-is", () => {
      // Arrange
      const subject = 5;

      // Act
      const result = NumberUtils.parseInt(subject);

      // Assert
      expect(result).toEqual(5);
    });

    it("when subject is a Number class instance, then returns the value as-is", () => {
      // Arrange
      const subject = Number(5);

      // Act
      const result = NumberUtils.parseInt(subject);

      expect(result).toEqual(Number(5));
    });

    it("when subject is undefined, then returns undefined", () => {
      // Arrange
      const subject = undefined;

      // Act
      const result = NumberUtils.parseInt(subject);

      // Assert
      expect(result).toBeUndefined();
    });

    it("when subject is a string with no numeric characters, then returns undefined", () => {
      // Arrange
      const subject = "welcome to flavor town";

      // Act
      const result = NumberUtils.parseInt(subject);

      // Assert
      expect(result).toBeUndefined();
    });

    it("when subject is a string containing only numeric characters, then returns the numeric value as a number", () => {
      // Arrange
      const subject = "5";

      // Act
      const result = NumberUtils.parseInt(subject);

      // Assert
      expect(result).toEqual(5);
    });
  });
});
