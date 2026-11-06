export interface GridCell {
  readonly row: number;
  readonly column: number;
}
export function encodeGridCell(row: number, column: number): string {
  if (!Number.isSafeInteger(row) || row < 0 || !Number.isSafeInteger(column) || column < 0)
    throw new RangeError('Coordinates must be nonnegative safe integers');
  let n = column + 1,
    label = '';
  while (n) {
    const rem = (n - 1) % 26;
    label = String.fromCharCode(65 + rem) + label;
    n = Math.floor((n - 1) / 26);
  }
  return label + (row + 1);
}
export function decodeGridCell(label: string): GridCell {
  if (typeof label !== 'string') throw new TypeError('Label must be text');
  const m = /^([A-Z]+)([1-9]\d*)$/.exec(label);
  if (!m) throw new RangeError('Invalid grid cell');
  let column = 0;
  for (const char of m[1]!) {
    column = column * 26 + char.charCodeAt(0) - 64;
    if (!Number.isSafeInteger(column)) throw new RangeError('Column exceeds safe range');
  }
  const row = Number(m[2]) - 1;
  if (!Number.isSafeInteger(row)) throw new RangeError('Row exceeds safe range');
  return { row, column: column - 1 };
}
