import { hours } from "../hours"
import { minutes } from "../minutes"

describe('hours', () => {
  test('identity is 60 minutes', () => {
    expect(hours()).toEqual(minutes(60))
  })

  test('2 should be 120 minutes', () => {
    expect(hours(2)).toEqual(minutes(120))
  })
})
