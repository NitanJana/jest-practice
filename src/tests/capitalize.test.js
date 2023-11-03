import capitalize from "../modules/capitalize";

test("Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Empty string", () => {
  expect(capitalize("")).toBe("Empty String");
});
