/**
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
 * Print the decimal value of each fraction on a new line with 6 places after the decimal.
 *
 * Note:
 * - This challenge introduces precision problems.
 * - The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4 are acceptable.
 *
 * Output Format:
 * - Print the following  lines, each to  decimals:
 * - 1) proportion of positive values
 * - 2) proportion of negative values
 * - 3) proportion of zeros
 *
 * Example:
 * - arr = [1, 1, 0, -1, -1]
 * - There are n = 5 elements, two positive, two negative and one zero.
 * - Their ratios are 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000.
 * - Results are printed as:
 *   - 0.400000
 *   - 0.400000
 *   - 0.200000
 *
 * @param inputArray
 */
export const plusMinus = (inputArray: number[]): string => {
  return inputArray
    .reduce(
      (acc, value) => {
        let [positives, negatives, zeros] = acc;

        return [
          value > 0 ? ++positives : positives,
          value < 0 ? ++negatives : negatives,
          value === 0 ? ++zeros : zeros,
        ];
      },
      [0, 0, 0]
    )
    .reduce(
      (acc, value) => (acc += `${(value / inputArray.length).toFixed(6)}\n`),
      ""
    );
};
