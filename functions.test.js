const fib = require('./fib');


test("Return false for Not a Number parameter", () => {
    expect(fib('d')).toEqual(Error('Invalid value'));
  });
  test("Return Error for fib(8.6)", () => {
    expect(fib(8.6)).toEqual(Error('Invalid value'));
  });
  test("Return Error for negative number fib(-4)", () => {
    expect(fib(-4)).toEqual(Error('Invalid value'));
  });
  test("Return [0, 1, 1, 2, 3]] for fib(5)", () => {
    expect(fib(5)).toEqual([0, 1, 1, 2, 3]);
  });