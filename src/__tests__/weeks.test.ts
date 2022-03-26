import { weeks } from "../weeks"
import { days } from "../days"

describe('weeks', () => {
  test('identity', () => {
    expect(weeks()).toEqual(days(7))
  })

  test('2 should be 14 days', () => {
    expect(weeks(2)).toEqual(days(14))
  })
})
