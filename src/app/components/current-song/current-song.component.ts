import { Component, effect, inject } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'current-song',
  templateUrl: './current-song.component.html',
  styles: ``
})
export class CurrentSongComponent {

  playerService = inject(PlayerService);

  image: string = '';
  title: string = '';
  artists: string = '';

  constructor() {
    effect(() => {
      const { song } = this.playerService.currentMusic;
      if (song) {
        this.image = song.image;
        this.artists = song.artists.join(', ');
        this.title = song.title;
      }
    });
  }

}
