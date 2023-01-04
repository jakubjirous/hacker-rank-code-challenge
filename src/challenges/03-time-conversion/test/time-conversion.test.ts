import { Input, timeConversion, Output } from "../time-conversion";

type Cases = [Input, Output][];

describe("Time Conversion", () => {
  const cases: Cases = [
    ["07:05:45PM", "19:05:45"],
    ["12:40:22AM", "00:40:22"],
    ["06:40:03AM", "06:40:03"],
    ["12:05:39AM", "00:05:39"],
    ["12:45:54PM", "12:45:54"],
    ["02:34:50PM", "14:34:50"],
    ["04:59:59AM", "04:59:59"],
    ["04:59:59AM", "04:59:59"],
    ["04:59:59PM", "16:59:59"],
    ["12:00:00AM", "00:00:00"],
  ];

  test.each(cases)(
    "for given time %p output should be %p",
    (firstArg, expectedResult) => {
      const result = timeConversion(firstArg);
      expect(result).toEqual(expectedResult);
    }
  );
});
