import { Component } from '@angular/core';
import { Playlist, playlists } from 'src/app/interfaces/playlistData.interface';

@Component({
  selector: 'aside-menu',
  templateUrl: './aside-menu.component.html',
  styles: ``
})
export class AsideMenuComponent {

  playlist: Playlist[] = [];

  constructor() {

    this.playlist = playlists;

  }
}
