import {
  ChangeDetectionStrategy,
  Component,
  NO_ERRORS_SCHEMA,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  schemas: [NO_ERRORS_SCHEMA],
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
