import { Component, Input } from '@angular/core';

@Component({
  selector: 'side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styles: ``
})
export class SideMenuItemComponent {
  @Input() title = '';
  @Input() icon = '';
}
