export function capitalize(str: string): string {
  return str.length === 0
    ? ''
    : str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
