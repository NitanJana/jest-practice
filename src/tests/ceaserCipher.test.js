import ceasrCipher from "../modules/ceaserCipher";

test("normal string", () => {
  expect(ceasrCipher.encipher("hello", 6)).toBe("nkrru");
});

test("character wraps around after z", () => {
  expect(ceasrCipher.encipher("xerox", 12)).toBe("jqdaj");
});

test("character stays the same case", () => {
  expect(ceasrCipher.encipher("Hello", 6)).toBe("Nkrru");
});

test("key size wraps around 26", () => {
  expect(ceasrCipher.encipher("hello", 36)).toBe("rovvy");
});

test("punctuations stays same", () => {
  expect(ceasrCipher.encipher("hello,World", 36)).toBe("rovvy,Gybvn");
});

test("Numbers stays same", () => {
  expect(ceasrCipher.encipher("hello,World 255", 36)).toBe("rovvy,Gybvn 255");
});
