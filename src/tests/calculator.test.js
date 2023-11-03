import calculator from "../modules/calculator";

test("calculator.add(2,3) returns 5", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("calculator.add(hello,3) returns Not valid Number(s)", () => {
  expect(calculator.add("hello", 3)).toBe("Not valid Number(s)");
});
