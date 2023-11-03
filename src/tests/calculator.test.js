import calculator from "../modules/calculator";

test("add integer numbers", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("add string with number", () => {
  expect(calculator.add("hello", 3)).toBe("Not valid Number(s)");
});

test("add decimal numbers", () => {
  expect(calculator.add(3.5, 3)).toBe(6.5);
});

test("subtract integer numbers", () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
});

test("subtract string with number", () => {
  expect(calculator.subtract("hello", 3)).toBe("Not valid Number(s)");
});

test("subtract decimal numbers", () => {
  expect(calculator.subtract(3.5, 3)).toBe(0.5);
});
