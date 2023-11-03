export default function capitalize(string) {
  if (!string) return "Empty String";
  return string[0].toUpperCase()+string.slice(1);
}
