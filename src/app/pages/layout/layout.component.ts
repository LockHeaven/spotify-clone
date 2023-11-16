import { Component } from '@angular/core';
import { Playlist, playlists } from 'src/app/interfaces/playlistData.interface';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent {
  playlist: Playlist[] = [];

  constructor() {

    this.playlist = playlists;

  }
}
