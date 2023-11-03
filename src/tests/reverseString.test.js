import reverseString from "../modules/reverseString";

test("abc returns cba", () => {
  expect(reverseString("abc")).toBe("cba");
});

test("hello world returns dlrow olleh", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test(`"12345" returns "54321"`, () => {
  expect(reverseString("12345")).toBe("54321");
});

test("12345 returns Not a String", () => {
  expect(reverseString(12345)).toBe("Not a String");
});

test("Empty String returns Empty String", () => {
  expect(reverseString("")).toBe("");
});
