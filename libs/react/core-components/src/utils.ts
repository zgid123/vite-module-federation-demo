export function hexToRGB(hex: string, alpha = 1): string {
  if (hex[0] !== '#') {
    return 'transparent';
  }

  const rgb = (
    hex
      .substring(1)
      .match(new RegExp(hex.length === 7 ? '\\w\\w' : '\\w', 'g')) || []
  )
    .map((char) => {
      return parseInt(char.padStart(2, char), 16);
    })
    .join(',');

  return `rgba(${rgb}, ${alpha})`;
}
