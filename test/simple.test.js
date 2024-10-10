const { expect } = require("@jest/globals");
const { distance, product } = require("../src/math.js");
describe("Mathematic operations", () => {

  it("should return distance between two points", () => {
    const val1 = distance([1, 0], [1, 0]);
    const val2 = distance([0, 0], [3, 4]);
    expect(val1).toBe(0);
    expect(val2).toBe(5);
  })

  it("should return product of two values", () => {
    expect(product(3, 4)).toBe(12);
    expect(product(0, 1)).toBe(0);
  })

});

