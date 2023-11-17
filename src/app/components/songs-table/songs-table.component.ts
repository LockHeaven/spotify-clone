import { Component, Input, OnInit, inject } from '@angular/core';
import { Song } from 'src/app/interfaces/playlistData.interface';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'songs-table',
  templateUrl: './songs-table.component.html',
  styles: ``
})
export class SongsTableComponent {

  @Input() songs: Song[] = [];
  
}
