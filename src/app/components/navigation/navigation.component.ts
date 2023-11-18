import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styles: ``
})
export class NavigationComponent {

  location = inject(Location);

  goBack(): void {
    this.location.back();
  }

  goFoward(): void {
    this.location.forward();
  }

}
