import { minutes } from "../minutes"
import { seconds } from "../seconds"

describe('minutes', () => {
  test('1 should be 60 seconds', () => {
    expect(minutes(1)).toEqual(seconds(60))
  })
})
