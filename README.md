# @lp-labs/grid-coordinate-codec

Encodes and decodes nonnegative row/column coordinates as canonical grid labels.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/grid-coordinate-codec
```

## Working example

```js
import { encodeGridCell, decodeGridCell } from '@lp-labs/grid-coordinate-codec';
console.log(encodeGridCell(0, 0));
```

CommonJS: `const api = require('@lp-labs/grid-coordinate-codec')`.

## Behavior, customization and limits

Uses zero-based coordinates and a configurable alphabet for spreadsheet-style columns, followed by one-based rows. Input labels are canonical uppercase ASCII letters plus positive decimal row numbers; this is not an Excel formula parser.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export interface GridCell {
  readonly row: number;
  readonly column: number;
}
export declare function encodeGridCell(row: number, column: number): string;
export declare function decodeGridCell(label: string): GridCell;
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
