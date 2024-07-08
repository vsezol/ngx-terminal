import {
  ChangeDetectionStrategy,
  Component,
  NO_ERRORS_SCHEMA,
} from '@angular/core';

@Component({
  selector: 'ngx-text',
  template: `
    <text>
      <ng-content></ng-content>
    </text>
  `,
  schemas: [NO_ERRORS_SCHEMA],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxTextComponent {}
