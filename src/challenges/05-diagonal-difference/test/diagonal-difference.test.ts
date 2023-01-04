import { Input, diagonalDifference, Output } from "../diagonal-difference";

type Cases = [Input, Output][];

describe("Diagonal Difference", () => {
  const cases: Cases = [
    [
      [
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12],
      ],
      15,
    ],
    [
      [
        [1, 5, 6],
        [3, 2, 7],
        [8, 5, 1],
      ],
      12,
    ],
    [
      [
        [1, 5, 6, 2],
        [3, 2, 7, 9],
        [8, 5, 1, 3],
        [2, 6, 8, 9],
      ],
      3,
    ],
    [
      [
        [2, 4, 5, 6],
        [8, 3, 1, 3],
        [7, 9, 4, 2],
        [5, 8, 3, 6],
      ],
      6,
    ],
    [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      0,
    ],
    [
      [
        [-1, 1, -7, -8],
        [-10, -8, -5, -2],
        [0, 9, 7, -1],
        [4, 4, -2, 1],
      ],
      1,
    ],
  ];

  test.each(cases)(
    "for given matrix %j output should be %d",
    (firstArg, expectedResult) => {
      const result = diagonalDifference(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
