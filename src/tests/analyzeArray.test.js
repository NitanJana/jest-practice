import analyzeArray from "../modules/analyzeArray";

test("Array of Numbers", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Array of Strings", () => {
  expect(analyzeArray(["Hello", "World"])).toBe("Not a valid Array");
});

test("Mixed Array", () => {
  expect(analyzeArray([5, "Hello", 12, "World"])).toBe("Not a valid Array");
});

test("String", () => {
  expect(analyzeArray("Hello")).toBe("Not a valid Array");
});

test("Number", () => {
  expect(analyzeArray(45452)).toBe("Not a valid Array");
});
