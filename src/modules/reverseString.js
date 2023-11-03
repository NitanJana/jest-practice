export default function reverseString(string) {
  if (typeof string !== "string") return "Not a String";
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i -= 1) {
    reversedString += string[i];
  }
  return reversedString;
}
