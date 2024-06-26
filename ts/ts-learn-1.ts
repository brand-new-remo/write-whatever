/**
 * Calculates the distance between two points in a 2D plane.
 * 
 * @param x1 The x-coordinate of the first point.
 * @param y1 The y-coordinate of the first point.
 * @param x2 The x-coordinate of the second point.
 * @param y2 The y-coordinate of the second point.
 * @returns The distance between the two points.
 */
function calculateDistance(x1: number, y1: number, x2: number, y2: number) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function testName(name: string) {
  return `Hello, ${name}!`;
}

type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // 类型为 true
type B = IsString<number>;  // 类型为 false
