import { calculateDistance } from './ts-learn-1';

test('calculateDistance should return the correct distance', () => {
  // Test case 1: (0, 0) to (3, 4)
  expect(calculateDistance(0, 0, 3, 4)).toBe(5);

  // Test case 2: (-2, -3) to (5, 1)
  expect(calculateDistance(-2, -3, 5, 1)).toBe(10);

  // Test case 3: (1, 1) to (1, 1)
  expect(calculateDistance(1, 1, 1, 1)).toBe(0);
});