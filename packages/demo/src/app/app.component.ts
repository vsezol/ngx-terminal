import {
  ChangeDetectionStrategy,
  Component,
  NO_ERRORS_SCHEMA,
  signal,
} from '@angular/core';
import { NgxBoxComponent, NgxTextComponent } from '@ngx-terminal/ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  schemas: [NO_ERRORS_SCHEMA],
  imports: [NgxBoxComponent, NgxTextComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  counter = signal<number>(0);

  constructor() {
    setInterval(() => {
      this.counter.update((x) => x + 1);
    }, 100);
  }
}
