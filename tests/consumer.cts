import * as api from '@lp-labs/grid-coordinate-codec';
import { encodeGridCell, decodeGridCell } from '@lp-labs/grid-coordinate-codec';
console.log(encodeGridCell(0, 0));
// @ts-expect-error invalid argument must be rejected by declarations
api.encodeGridCell('zero', 0);
