export type Input = number[];
export type Output = [number, number];

/**
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then
 * print the respective minimum and maximum values as a single line of two space-separated long integers.
 *
 * Explanation:
 * - The numbers are 1, 2, 3, 4, and 5.
 * - Calculate the following sums using four of the five integers:
 *   - 1) Sum everything except 1, the sum is 2 + 3 + 4 + 5 = 14.
 *   - 2) Sum everything except 2, the sum is 1 + 3 + 4 + 5 = 13.
 *   - 3) Sum everything except 3, the sum is 1 + 2 + 4 + 5 = 12.
 *   - 4) Sum everything except 4, the sum is 1 + 2 + 3 + 5 = 11.
 *   - 5) Sum everything except 5, the sum is 1 + 2 + 3 + 4 = 10.
 *
 * Output Format:
 * - Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers.
 * - The output can be greater than a 32 bit integer.
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
