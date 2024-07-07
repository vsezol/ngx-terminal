import { DOCUMENT } from '@angular/common';
import { ElementSchemaRegistry } from '@angular/compiler';
import {
  ApplicationConfig,
  ApplicationRef,
  COMPILER_OPTIONS,
  Sanitizer,
  Type,
  ɵinternalCreateApplication as createApplication,
  createPlatformFactory,
  importProvidersFrom,
  ɵsetDocument as setDocument,
} from '@angular/core';
import { ɵplatformCoreDynamic as platformCoreDynamic } from '@angular/platform-browser-dynamic';

import { TerminalSanitizer } from './sanitizer';
import { TerminalElementSchemaRegistry } from './schema-registry';
import { TerminalModule } from './terminal.module';

const COMMON_PROVIDERS = [
  { provide: DOCUMENT, useValue: {} },
  { provide: Sanitizer, useClass: TerminalSanitizer, deps: [] },
];

const COMPILER_PROVIDERS = [
  {
    provide: COMPILER_OPTIONS,
    useValue: {
      providers: [
        {
          provide: ElementSchemaRegistry,
          useClass: TerminalElementSchemaRegistry,
          deps: [],
        },
      ],
    },
    multi: true,
  },
];

export function bootstrapApplication(
  rootComponent: Type<unknown>,
  options?: ApplicationConfig
): Promise<ApplicationRef> {
  setDocument({} as Document);

  return createApplication({
    rootComponent,
    appProviders: [
      importProvidersFrom(TerminalModule),
      ...(options?.providers ?? []),
    ],
    platformProviders: [...COMMON_PROVIDERS, ...COMPILER_PROVIDERS],
  });
}

export const platformTerminalDynamic = createPlatformFactory(
  platformCoreDynamic,
  'terminalDynamic',
  [...COMMON_PROVIDERS, ...COMPILER_PROVIDERS]
);
