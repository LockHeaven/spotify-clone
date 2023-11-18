import { Component, Input, OnInit, effect, inject } from '@angular/core';
import { Playlist, Song } from 'src/app/interfaces/playlistData.interface';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'songs-table',
  templateUrl: './songs-table.component.html',
  styles: ``
})
export class SongsTableComponent implements OnInit {
  @Input() songs: Song[] = [];
  @Input() playlist!: Playlist;

  iconPlay = false;

  hoverSong?: Song;

  playingSong?: Song;

  isPlaying = false;
  
  playerService = inject(PlayerService);

  constructor() {
    effect(() => {
      this.isPlaying = this.playerService.isPlaying;
      const { song } = this.playerService.currentMusic;
      this.playingSong = song;
    });
  }
  
  ngOnInit(): void {
    const { song } = this.playerService.currentMusic;
    if (song) {
      this.playingSong = song;
    }
  }

  playSong(songCurrent: Song): void {
    if (this.playingSong === songCurrent) {
      this.playerService.setIsPlaying(true);
      return;
    }
    this.playingSong = songCurrent;
    this.playerService.setCurrentMusic({ song: songCurrent, songs: this.songs, playlist: this.playlist });
    this.playerService.setIsPlaying(true);
  }

  pauseSong(): void {
    this.playerService.setIsPlaying(false);
  }

  checkPlayingSong(song: Song): string {
    const classPlaying = song.id === this.playingSong?.id && this.playingSong.albumId === this.playlist.albumId
            ? 'bg-white/40'
            : 'hover:bg-white/10';
    return classPlaying;
  }

  mouseEnter(song: Song) {
    this.hoverSong = song;
    this.iconPlay = true;
  }

  mouseOut() {
    this.hoverSong = undefined;
    this.iconPlay = false;
  }
  
}
