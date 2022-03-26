import { days } from "./days"
import { isLeap } from "./isLeap"

/**
 * Get precise number of milliseconds in a specific year
 * @example
 * yearOf(2021)
 */
export const yearOf = (year: number) => days(isLeap(year) ? 366 : 365)

/**
 * Get precise number of milliseconds in a specific year
 * @example
 * yearOfDate(new Date(2022))
 */
export const yearOfDate = (date: Date) => yearOf(date.getFullYear())

/**
 * Generic 365 days in a year.
 * @example
 * years(3)
 */
export const years = (val: number = 1) => val * days(365)
