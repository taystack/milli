import { days } from "../days"
import { monthOf, monthOfDate, months } from "../months"

describe('months', () => {
  test('identity', () => {
    expect(months()).toEqual(days(30))
  })

  test('2 should be 60 days', () => {
    expect(months(2)).toEqual(days(60))
  })
})

describe('monthOf', () => {
  test('February 2022 should be 28 days', () => {
    expect(monthOf('feburary', 2022)).toEqual(days(28))
  })

  test('February 2020 should be 29 days', () => {
    expect(monthOf('feburary', 2020)).toEqual(days(29))
  })
})

describe('monthOfDate', () => {
  test('February 2022 should be 28 days', () => {
    expect(monthOfDate(new Date('2022/02'))).toEqual(days(28))
  })

  test('February 2020 should be 29 days', () => {
    expect(monthOfDate(new Date('2020/02'))).toEqual(days(29))
  })
})
