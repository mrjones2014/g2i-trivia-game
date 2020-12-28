import QuestionRecord from "models/question";
import { ObjectUtils } from "utilities/object-utils";

describe("ObjectUtils", () => {
  describe("#isObject", () => {
    it("when subject is a string, then returns false", () => {
      // Arrange
      const subject = "what's good in the neighborhood?";

      // Act
      const result = ObjectUtils.isObject(subject);

      // Assert
      expect(result).toBeFalsy();
    });

    it("when subject is a number, then returns false", () => {
      // Arrange
      const subject = 5;

      // Act
      const result = ObjectUtils.isObject(subject);

      // Assert
      expect(result).toBeFalsy();
    });

    it("when subject is a boolean, then returns false", () => {
      // Arrange
      const subject = false;

      // Act
      const result = ObjectUtils.isObject(subject);

      // Assert
      expect(result).toBeFalsy();
    });

    it("when subject is a function, then returns false", () => {
      // Arrange
      const subject = jest.fn();

      // Act
      const result = ObjectUtils.isObject(subject);

      // Assert
      expect(result).toBeFalsy();
    });

    it("when subject is an object literal, then returns true", () => {
      // Arrange
      const subject = {};

      // Act
      const result = ObjectUtils.isObject(subject);

      // Assert
      expect(result).toBeTruthy();
    });

    it("when subject is a class instance, then returns true", () => {
      // Arrange
      const subject = new QuestionRecord();

      // Act
      const result = ObjectUtils.isObject(subject);

      // Assert
      expect(result).toBeTruthy();
    });
  });

  describe("#mapObjectKeysToCamelCase", () => {
    it("when subject is not an object, returns the subject", () => {
      // Arrange
      const subject = 5;

      // Act
      const result = ObjectUtils.mapObjectKeysToCamelCase(subject);

      // Assert
      expect(result).toEqual(5);
    });

    it("when object keys are already camel case, returns object unchanged", () => {
      // Arrange
      const subject = { camelCase: "I'm camel case already dude" };

      // Act
      const result = ObjectUtils.mapObjectKeysToCamelCase(subject);

      // Assert
      expect(result).toStrictEqual(subject);
    });

    it("when object keys are snake_case, then returns equivalent object with camelCase keys", () => {
      // Arrange
      const subject = { my_property: "myProperty" };
      const expectedResult = { myProperty: "myProperty" };

      // Act
      const result = ObjectUtils.mapObjectKeysToCamelCase(subject);

      // Assert
      expect(result).toStrictEqual(expectedResult);
    });

    it("when object has nested objects, then all keys are recursively converted to camelCase", () => {
      // Arrange
      const subject = {
        my_property: "myProperty",
        my_nested_object: {
          my_property: "myProperty",
        },
      };
      const expectedResult = {
        myProperty: "myProperty",
        myNestedObject: {
          myProperty: "myProperty",
        },
      };

      // Act
      const result = ObjectUtils.mapObjectKeysToCamelCase(subject);

      // Assert
      expect(result).toStrictEqual(expectedResult);
    });
  });
});
