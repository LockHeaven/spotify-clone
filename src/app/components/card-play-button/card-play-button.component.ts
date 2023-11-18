import { Component, Input, OnInit, effect, inject } from '@angular/core';
import { Song } from 'src/app/interfaces/playlistData.interface';
import { DataService } from 'src/app/services/data.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-card-play-button',
  templateUrl: './card-play-button.component.html',
  styles: ``
})
export class CardPlayButtonComponent implements OnInit {
  @Input() id: number = 0;
  @Input() size: string = 'small';
  
  iconClassName: string = '';

  playingSong?: Song;

  playerService = inject(PlayerService);

  constructor() {
    effect(() => {
      const { song } = this.playerService.currentMusic;
      this.playingSong = song;
    })
    
  }

  ngOnInit(): void {  
    this.iconClassName = this.size === 'small' ? 'w-4 h-4' : 'w-5 h-5';
  }

  play(): void {
    if (this.isPlayingPlaylist) {
      this.playerService.setIsPlaying(false);
      return;
    }
    
    if (this.playingSong?.albumId === this.id) {
      this.playerService.setIsPlaying(true);
      return;
    }

    const playlist = this.playerService.findPlaylist(this.id);
    const songs = this.playerService.findPlaylistSongs(playlist.albumId);
    const song = songs[0]
    
    this.playerService.setIsPlaying(true);
    this.playerService.setCurrentMusic({ playlist, songs, song })
  }

  get isPlayingPlaylist(): boolean {
    return this.playerService.isPlaying && this.playerService.currentMusic.playlist?.albumId === this.id;
  }

}
