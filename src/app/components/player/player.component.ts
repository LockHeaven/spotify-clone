import { Component, ElementRef, HostListener, ViewChild, effect, inject } from '@angular/core';
import { Song } from 'src/app/interfaces/playlistData.interface';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styles: ``
})
export class PlayerComponent {
  @ViewChild('Audio') audio!: ElementRef<HTMLAudioElement>;
  isPlaying = false;
  song?: Song;

  currentTime: number = 0;
  duration: number = 0;

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
      if (song) {
        this.song = song;
        const src = `../assets/music/${playlist?.albumId}/${song.id}.mp3`;
        this.audio.nativeElement.src = src
        this.audio.nativeElement.play()
      }
    });
  }
  
  onChangeAudio() {
    this.duration = this.audio.nativeElement.duration;
    this.currentTime = this.audio.nativeElement.currentTime;
 }

 onPlayerChange(event: Event): void {
  const value = event.target as HTMLInputElement;
  this.audio.nativeElement.currentTime = value.valueAsNumber;  
 }

 formatTime(time: number): string {
  const seconds = Math.floor(time % 60)
  const minutes = Math.floor(time / 60)

  return `${minutes}:${seconds.toString().padStart(2, '0')}`
 }

  play(): void {
    this.playerService.setIsPlaying(!this.playerService.isPlaying);
  }



  statement = false;

}
