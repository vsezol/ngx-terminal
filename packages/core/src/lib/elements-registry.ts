import * as blessed from 'blessed';
import { Widgets } from 'blessed';
import * as contrib from 'blessed-contrib';

import { deferredElement } from './adapters/deferred';
import { gridFactory } from './adapters/grid-adapter';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ElementFactory = (value: any) => Widgets.BoxElement;

export const elementsFactory: Map<string, ElementFactory> = new Map()
  .set('text', blessed.text)
  .set('box', blessed.box)
  .set('table', blessed.table)
  .set('line', deferredElement(contrib.line))
  .set('sparkline', deferredElement(contrib.sparkline))
  .set('bar', deferredElement(contrib.bar))
  .set('table', deferredElement(contrib.table))
  .set('map', deferredElement(contrib.map))
  .set('grid', gridFactory);
