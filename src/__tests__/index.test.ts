import * as milli from '../'

describe('milli', () => {
  test('exports', () => {
    expect(milli.days).toBeDefined()
    expect(milli.hours).toBeDefined()
    expect(milli.isLeap).toBeDefined()
    expect(milli.minutes).toBeDefined()
    expect(milli.monthOf).toBeDefined()
    expect(milli.monthOfDate).toBeDefined()
    expect(milli.months).toBeDefined()
    expect(milli.seconds).toBeDefined()
    expect(milli.weeks).toBeDefined()
    expect(milli.yearOf).toBeDefined()
    expect(milli.yearOfDate).toBeDefined()
    expect(milli.years).toBeDefined()
  })
})
