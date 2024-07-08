import { Injectable } from '@angular/core';
import * as blessed from 'blessed';
import { Widgets } from 'blessed';

import {
  ElementFactory,
  ElementName,
  elementsFactory,
} from './elements-registry';

@Injectable()
export class Screen {
  private screen!: Widgets.Screen;

  constructor() {
    this.init();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createElement(name: ElementName, options: any = {}): Widgets.BlessedElement {
    let elementFactory: ElementFactory | undefined = elementsFactory.get(name);

    if (!elementFactory) {
      elementFactory = elementsFactory.get('box');
    }

    if (!elementFactory) {
      throw new Error('[Screen] cannot create element factory');
    }

    return elementFactory({ ...options, screen: this.screen });
  }

  selectRootElement(): Widgets.Screen {
    return this.screen;
  }

  private init() {
    this.screen = blessed.screen({ smartCSR: true });
    this.setupExitListener();
  }

  private setupExitListener() {
    this.screen.key(['escape', 'q', 'C-c'], () => process.exit(0));
  }
}
