import { isLeap } from "../isLeap"

describe('isLeap', () => {
  test('The year can be evenly divided by 4', () => {
    expect(isLeap(4)).toBe(true)
    expect(isLeap(5)).toBe(false)
  })

  test('If the year can be evenly divided by 100, it is NOT a leap year', () => {
    expect(isLeap(1900)).toBe(false)
  })

  test('unless; The year is also evenly divisible by 400. Then it is a leap year.', () => {
    expect(isLeap(2000)).toBe(true)
  })
})