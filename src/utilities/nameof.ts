/**
 * Creates a compile-time error if propertyName is mispelled or does
 * not exist on the target type.
 * @param propertyName the property name to type-safely get the name of.
 */
export function nameof<T>(
  propertyName: Extract<keyof T, string>
): string | keyof T {
  return propertyName;
}
