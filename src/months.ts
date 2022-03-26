import { days } from "./days"

export type Month = 'january' | 'feburary' | 'march' | 'april' | 'may' | 'june' | 'july' | 'august' | 'september' | 'october' | 'november' | 'december'

/**
 * String month options
 */
const MONTHS: Month[] = [
  'january',
  'feburary',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
]

const numberOfDaysInMonthOf = (val: Date) => new Date(val.getFullYear(), val.getMonth() + 1, 0).getDate()

/**
 * Get milliseconds in the month of a Date object
 * @example
 * monthOfDate(new Date('2022/01'))
 */
export const monthOfDate = (date: Date) => days(numberOfDaysInMonthOf(date))

/**
 * Get milliseconds in the month of MONTH, YEAR
 * @example
 * monthOf('january', 2022)
 */
export const monthOf = (month: Month, year: number) => days(numberOfDaysInMonthOf(new Date(year, MONTHS.indexOf(month), 1)))

/**
 * Generic 30 day months
 */
export const months = (val: number = 1) => {
  return val * days(30)
}
