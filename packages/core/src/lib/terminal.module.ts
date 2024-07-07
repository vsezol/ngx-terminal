import {
  ApplicationModule,
  ErrorHandler,
  ɵINJECTOR_SCOPE as INJECTOR_SCOPE,
  NgModule,
  RendererFactory2,
} from '@angular/core';

import { TerminalErrorHandler } from './error-handler';
import { TerminalRendererFactory } from './renderer';
import { Screen } from './screen';

@NgModule({
  exports: [ApplicationModule],
  providers: [
    Screen,
    {
      provide: RendererFactory2,
      useClass: TerminalRendererFactory,
      deps: [Screen],
    },
    { provide: ErrorHandler, useClass: TerminalErrorHandler },
    { provide: INJECTOR_SCOPE, useValue: 'root' },
  ],
})
export class TerminalModule {}
