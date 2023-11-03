import reverseString from "../modules/reverseString";
test("abc returns cba", () => {
  expect(reverseString("abc")).toBe("cba");
});
