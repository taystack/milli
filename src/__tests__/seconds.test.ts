import { seconds } from "../seconds"

describe('seconds', () => {
  test('identity', () => {
    expect(seconds()).toEqual(1000)
  })

  test('2 should be 2000ms', () => {
    expect(seconds(2)).toEqual(2000)
  })
})
