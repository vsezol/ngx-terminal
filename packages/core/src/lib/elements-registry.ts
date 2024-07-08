import { Widgets, box, text } from 'blessed';

export type ElementFactory = (
  options: Widgets.ElementOptions
) => Widgets.BlessedElement;

export type ElementName = 'text' | 'box';

export const elementsFactory: Map<ElementName, ElementFactory> = new Map([
  ['text', text],
  ['box', box],
]);
