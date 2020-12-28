import { StringUtils } from "utilities/string-utils";

describe("StringUtils", () => {
  describe("#capitalize", () => {
    it("when subject is null/undefined, then returns empty string", () => {
      // Arrange
      const subject = undefined;

      // Act
      const result = StringUtils.capitalize(subject);

      // Assert
      expect(result).toEqual("");
    });

    it("when subject is a single char, returns capitalized char", () => {
      // Arrange
      const subject = "a";

      // Act
      const result = StringUtils.capitalize(subject);

      // Asset
      expect(result).toEqual("A");
    });

    it("when subject contains other capitals, then returns string with only first letter capitalized", () => {
      // Arrange
      const subject = "cApItAlIzE mE!";
      const expectedResult = "Capitalize me!";

      // Act
      const result = StringUtils.capitalize(subject);

      // Assert
      expect(result).toEqual(expectedResult);
    });

    it("when string is all lowercase, then returns string with first letter capitalized", () => {
      // Arrange
      const subject = "capitalize me!";
      const expectedResult = "Capitalize me!";

      // Act
      const result = StringUtils.capitalize(subject);

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });

  describe("#toCamelCase", () => {
    it("when string is camelCase, then returns string unchanged", () => {
      // Arrange
      const subject = "camelCase";

      // Act
      const result = StringUtils.toCamelCase(subject);

      // Assert
      expect(result).toEqual(subject);
    });

    it("when string is snake_case, then returns string in camelCase", () => {
      // Arrange
      const subject = "snake_case";
      const expectedResult = "snakeCase";

      // Act
      const result = StringUtils.toCamelCase(subject);

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });
});
