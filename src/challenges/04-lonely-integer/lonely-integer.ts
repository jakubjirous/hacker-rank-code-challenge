export type Input = number[];
export type Output = number;

/**
 * Given an array of integers, where all elements but one occur twice, find the unique element.
 *
 * Example:
 * - `inputArray = [1, 2, 3, 4, 3, 2, 1]`
 * - The unique element is `4`.
 *
 * @param inputArray
 */
export const lonelyInteger = (inputArray: Input): Output => {
  const hash = new Map<number, number>();

  inputArray.map((item) =>
    hash.get(item) ? hash.delete(item) : hash.set(item, 1)
  );

  return hash.keys().next().value;
};
