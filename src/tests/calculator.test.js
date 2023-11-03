import calculator from "../modules/calculator";

test("calculator.add(2,3) returns 5", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("calculator.add(hello,3) returns Not valid Number(s)", () => {
  expect(calculator.add("hello", 3)).toBe("Not valid Number(s)");
});

test("add decimal numbers", () => {
  expect(calculator.add(3.5, 3)).toBe(6.5);
});

test("calculator.subtract(2,3) returns -1", () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
});

test("calculator.subtract(hello,3) returns Not valid Number(s)", () => {
  expect(calculator.subtract("hello", 3)).toBe("Not valid Number(s)");
});

test("subtract decimal numbers", () => {
  expect(calculator.subtract(3.5, 3)).toBe(0.5);
});
