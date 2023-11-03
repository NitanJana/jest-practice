import ceasrCipher from "../modules/ceaserCipher";

test("normal string", () => {
  expect(ceasrCipher.encipher("hello", 6)).toBe("nkrru");
});
