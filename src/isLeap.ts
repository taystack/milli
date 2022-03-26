/**
 * In the Gregorian calendar three criteria must be taken into account to identify leap years:
 * The year can be evenly divided by 4;
 * If the year can be evenly divided by 100, it is NOT a leap year,
 *  unless;
 * The year is also evenly divisible by 400. Then it is a leap year.
 */
export const isLeap = (year: number) =>
  ((year % 4 === 0 && year % 100 > 0) || year % 400 == 0) ? true : false
