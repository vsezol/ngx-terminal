import {
  ChangeDetectionStrategy,
  Component,
  NO_ERRORS_SCHEMA,
} from '@angular/core';

@Component({
  selector: 'ngx-box',
  template: `
    <box>
      <ng-content></ng-content>
    </box>
  `,
  schemas: [NO_ERRORS_SCHEMA],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxBoxComponent {}
