import { days } from "../days"
import { hours } from "../hours"

describe('days', () => {
  test('identity', () => {
    expect(days()).toEqual(hours(24))
  })

  test('2 should be 48 hours', () => {
    expect(days(2)).toEqual(hours(48))
  })
})
