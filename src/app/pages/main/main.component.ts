import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: `
  #app {
    display: grid;
    grid-template-areas:
      "aside main main"
      "player player player";
    grid-template-columns: 350px 1fr;
    grid-template-rows: 1fr auto;
  }`
})
export class MainComponent {

}
