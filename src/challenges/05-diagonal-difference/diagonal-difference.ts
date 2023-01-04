export type Input = number[][];
export type Output = number;

/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 *
 * @param matrix
 */
export const diagonalDifference = (matrix: Input): Output => {
  const size = matrix.length;

  let primarySum = 0;
  let secondarySum = 0;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i === j) {
        primarySum += matrix[i][j];
      }

      if (i + j === size - 1) {
        secondarySum += matrix[i][j];
      }
    }
  }

  return Math.abs(primarySum - secondarySum);
};
