import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('encodes first cell', () => {
  assert.equal(api.encodeGridCell(0, 0), 'A1');
});
test('encodes columns beyond Z', () => {
  assert.equal(api.encodeGridCell(4, 26), 'AA5');
});
test('encodes larger column', () => {
  assert.equal(api.encodeGridCell(0, 701), 'ZZ1');
});
test('decodes cell label', () => {
  assert.deepEqual(api.decodeGridCell('AB12'), { row: 11, column: 27 });
});
test('round trips coordinates', () => {
  assert.deepEqual(api.decodeGridCell(api.encodeGridCell(999, 18277)), { row: 999, column: 18277 });
});
test('rejects lowercase label', () => {
  assert.throws(() => api.decodeGridCell('a1'), RangeError);
});
