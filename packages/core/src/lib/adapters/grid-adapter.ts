import { Widgets } from 'blessed';
import * as BlessedContrib from 'blessed-contrib';
import * as contrib from 'blessed-contrib';
import { Widgets as ContribWidgets } from 'blessed-contrib';

export function gridFactory(
  options?: ContribWidgets.GridOptions
): Widgets.BlessedElement {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const grid: ContribWidgets.GridElement = new contrib.grid(options as any);
  return new Proxy(grid, {
    set(
      target: BlessedContrib.Widgets.GridElement,
      p: PropertyKey,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: any
    ): boolean {
      if (p === 'rows' || p === 'cols') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (target as any)[p] = +value;
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (target as any)[p] = value;
      }
      return true;
    },
  });
}
