import { expect, test } from 'vitest'
import { timeStringToFloat } from './timeStringToFloat'

test('time 13:30:00 is to equal 13.5', () => {
  expect(timeStringToFloat("13:30:00")).toBe(13.5)
})