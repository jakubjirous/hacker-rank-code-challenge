export type Input = number[];
export type Output = [number, number];

/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then
 * print the respective minimum and maximum values as a single line of two space-separated long integers.
 *
 * Output Format:
 * - Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers.
 * - The output can be greater than a 32-bit integer.
 *
 * Example:
 * - inputArray = [1, 3, 5, 7, 9]
 * - The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24.
 * - The function prints:
 *   - 16 24
 *
 * @param inputArray
 */
export const miniMaxSum = (inputArray: Input): Output => {
  const min = Math.min(...inputArray);
  const max = Math.max(...inputArray);
  const sum = inputArray.reduce((acc, value) => acc + value);

  return [sum - max, sum - min];
};
