export type Input = string;
export type Output = string;

/**
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
 *
 * Note:
 * - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 *
 * Example:
 * - s = '12:01:00PM', return '12:01:00'
 * - s = '12:01:00AM', return '00:01:00'
 *
 * @param time
 */
export const timeConversion = (time: Input): Output => {
  let hour = time.slice(0, 2);
  const minuteAndSecond = time.slice(2, time.length - 2);
  const modifier = time.slice(-2);

  if (hour === "12") {
    hour = "00";
  }

  if (modifier === "PM") {
    hour = `${+hour + 12}`;
  }

  return `${hour}${minuteAndSecond}`;
};
