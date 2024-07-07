import * as blessed from 'blessed';
import { Widgets } from 'blessed';

export function progressBarFactory(
  options?: Widgets.ProgressBarOptions
): Widgets.BlessedElement {
  const progressbar: Widgets.ProgressBarElement = blessed.progressbar(options);
  return new Proxy(progressbar, {
    set(target, prop, value) {
      if (prop === 'filled') {
        target.setProgress(value);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (target as any)[prop] = value;
      }
      return true;
    },
  });
}
