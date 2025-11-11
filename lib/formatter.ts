export function shortenText(text: string | null, maxLength: number) {
  if (text != null && text.length > maxLength) {
    return text.slice(0, maxLength) + "....";
  }
  return text;
}
