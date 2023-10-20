import { expect, test } from 'vitest'
import { mapTimeToIndex } from './mapTimeToIndex'

test('time 16:20:05 is at index 5', () => {
  expect(mapTimeToIndex("16:20:05")).toBe(5)
})