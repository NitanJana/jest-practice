export default function capitalize(string) {
  if (!string) return "Empty String";
  if (typeof (string) !== 'string') return "Not valid String";
  return string[0].toUpperCase()+string.slice(1);
}
