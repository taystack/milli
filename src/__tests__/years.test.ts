import { days } from "../days"
import { yearOf, yearOfDate, years } from "../years"

describe('years', () => {
  test('identity', () => {
    expect(years()).toEqual(days(365))
  })

  test('2 should be 730 days', () => {
    expect(years(2)).toEqual(days(730))
  })
})

describe('yearOf', () => {
  test('2022 should be 365 days', () => {
    expect(yearOf(2022)).toEqual(days(365))
  })

  test('2020 should be 366', () => {
    expect(yearOf(2020)).toEqual(days(366))
  })
})

describe('yearOfDate', () => {
  test('2022 should be 365 days', () => {
    expect(yearOfDate(new Date('2022/01'))).toEqual(days(365))
  })

  test('2020 should be 366', () => {
    expect(yearOfDate(new Date('2020/01'))).toEqual(days(366))
  })
})
