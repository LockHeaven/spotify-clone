import { Component, Input } from '@angular/core';

@Component({
  selector: 'play-icon',
  template: `
<svg role="img" [ngClass]="size" aria-hidden="true" viewBox="0 0 16 16"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
  `,
  styles: ``
})
export class PlayIconComponent {
  @Input() size: string = 'h-4 w-4';
}
