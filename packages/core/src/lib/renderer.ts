/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  Renderer2,
  RendererFactory2,
  RendererStyleFlags2,
  RendererType2,
} from '@angular/core';
import { Widgets } from 'blessed';

import { ElementName } from './elements-registry';
import { Screen } from './screen';

@Injectable()
export class TerminalRendererFactory implements RendererFactory2 {
  protected renderer: Renderer2;

  constructor(private screen: Screen) {
    this.renderer = new TerminalRenderer(screen);
  }

  end() {
    this.screen.selectRootElement().render();
  }

  createRenderer(hostElement: any, type: RendererType2 | null): Renderer2 {
    return this.renderer;
  }
}

export class TerminalRenderer implements Renderer2 {
  readonly data!: { [p: string]: any };
  destroyNode!: ((node: any) => void) | null;

  constructor(private screen: Screen) {}

  createElement(name: ElementName, namespace?: string | null): any {
    return this.screen.createElement(name);
  }

  createText(value: string): any {
    return this.screen.createElement('text', { content: value });
  }

  selectRootElement(): Widgets.Screen {
    return this.screen.selectRootElement();
  }

  addClass(el: any, name: string): void {}

  appendChild(
    parent: Widgets.BlessedElement,
    child: Widgets.BlessedElement
  ): void {
    if (!child) {
      return;
    }

    parent.append(child);
  }

  createComment(value: string): any {}

  destroy(): void {}

  insertBefore(parent: any, newChild: any, refChild: any): void {}

  listen(
    target: Widgets.BlessedElement,
    eventName: string,
    callback: (event: any) => boolean | void
  ): () => void {
    target.on('click', callback);
    return function () {};
  }

  nextSibling(node: any): any {}

  parentNode(node: any): any {}

  removeAttribute(el: any, name: string, namespace?: string | null): void {}

  removeChild(parent: any, oldChild: any): void {}

  removeClass(el: any, name: string): void {}

  removeStyle(el: any, style: string, flags?: RendererStyleFlags2): void {}

  setAttribute(
    el: Widgets.BlessedElement,
    name: string,
    value: string,
    namespace?: string | null
  ): void {
    (el as any)[name] = value;
  }

  setProperty(el: Widgets.BlessedElement, name: string, value: any): void {
    if (name === 'styles') {
      name = 'style';
    } else {
      (el as any)[name] = value;
    }
  }

  setStyle(
    el: Widgets.BlessedElement,
    style: string,
    value: any,
    flags?: RendererStyleFlags2
  ): void {
    (el as any)[style] = value;
  }

  setValue(node: Widgets.BlessedElement, value: string): void {
    node.setContent(value);
  }
}
