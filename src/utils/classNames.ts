export function classNames(...names: (string | null | undefined)[]) {
  return names.filter((n) => ![null, undefined, ''].includes(n)).join(' ');
}
