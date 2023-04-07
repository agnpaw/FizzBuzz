const fizzbuzz = require("./calc");

describe("fizzbuzz test", () => {
  it("returns 'Fizz' if the number is divisible by 3", () => {
    expect(fizzbuzz(6)).toBe("Fizz");
    expect(fizzbuzz(9)).toBe("Fizz");
  });
  it("returns 'Buzz' if the number is divisible by 5", () => {
    expect(fizzbuzz(10)).toBe("Buzz");
    expect(fizzbuzz(5)).toBe("Buzz");
  });
  it("returns 'FizzBuzz' if the number is divisible by 3 and by 5", () => {
    expect(fizzbuzz(30)).toBe("FizzBuzz");
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });
  it("returns the passed number if it is not divisible by any of the above", () => {
    expect(fizzbuzz(1)).toBe("1");
    expect(fizzbuzz(14)).toBe("14");
  });
});
