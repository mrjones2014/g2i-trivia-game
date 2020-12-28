import { RouteUtils } from "utilities/route-utils";

describe("RouteUtils", () => {
  describe("#getUrl", () => {
    it("when pathParams is undefined, then returns path unchanged", () => {
      // Arrange
      const path = "/some/:path";

      // Assert
      const result = RouteUtils.getUrl(path);

      // Assert
      expect(result).toEqual(path);
    });

    it("when path contains no path params, then returns the path unchanged", () => {
      // Arrange
      const path = "/some/path";

      // Assert
      const result = RouteUtils.getUrl(path);

      // Assert
      expect(result).toEqual(path);
    });

    it("when pathParams keys do not match the path params, then returns the path unchanged", () => {
      // Arrange
      const path = "/some/:path/:with/:params";
      const pathParams = {
        someKey: "someValue",
        someOtherKey: "someOtherValue",
        im: "useless",
      };

      // Act
      const result = RouteUtils.getUrl(path, pathParams);

      // Assert
      expect(result).toEqual(path);
    });

    it("when pathParams has keys matching path params, then returns interpolated path with params", () => {
      // Arrange
      const path = "/some/:path/:with/:params";
      const pathParams = {
        path: "pathValue",
        with: "withValue",
        params: "paramsValue",
      };
      const expectedResult = "/some/pathValue/withValue/paramsValue";

      // Act
      const result = RouteUtils.getUrl(path, pathParams);

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });
});
