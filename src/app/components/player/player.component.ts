import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, effect, inject } from '@angular/core';
import { Song } from 'src/app/interfaces/playlistData.interface';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styles: ``
})
export class PlayerComponent implements AfterViewInit, OnInit {
  @ViewChild('Audio') audio!: ElementRef<HTMLAudioElement>;
  isPlaying = false;
  song?: Song;

  initialState = true;

  playerService = inject(PlayerService);

  private isPlayingEffect = effect(() => {
    this.playerService.isPlaying && this.song
      ? this.audio.nativeElement.play()
      : this.audio.nativeElement.pause();
  },);

  constructor() {
    effect(() => {
      this.audio.nativeElement.volume = this.playerService.volume;
    });

    effect(() => {
      const { playlist, song } = this.playerService.currentMusic;
      // if (this.song === song) {
      //   this.playerService.setIsPlaying(!this.playerService.isPlaying);
      //   { allowSignalWrites: true }
      //   return;
      // }
      if (song) {
        this.song = song;
        const src = `../assets/music/${playlist?.albumId}/${song.id}.mp3`;
        console.log(src);
        this.audio.nativeElement.src = src
        this.audio.nativeElement.play()
        // this.audio.nativeElement.volume = volume;
      }
    });
  }

  ngAfterViewInit(): void {
    // this.audio.nativeElement.src = '../assets/music/1.mp3';
  }

  ngOnInit(): void {

  }

  play(): void {
    this.playerService.setIsPlaying(!this.playerService.isPlaying);
  }



  statement = false;

}
