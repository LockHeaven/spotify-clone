import { Component, Input, OnInit, inject } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-card-play-button',
  templateUrl: './card-play-button.component.html',
  styles: ``
})
export class CardPlayButtonComponent implements OnInit {
  @Input() id: string = '';
  @Input() size: string = 'small';
  
  iconClassName: string = '';

  playerService = inject(PlayerService);
  dataService = inject(DataService);

  ngOnInit(): void {  
    this.iconClassName = this.size === 'small' ? 'w-4 h-4' : 'w-5 h-5';
  }

  play(): void {
    if (this.isPlayingPlaylist) {
      this.playerService.setIsPlaying(false);
      return;
    }

    const { playlist, songs } = this.dataService.get(this.id);
    const song = songs[0]
    
    this.playerService.setIsPlaying(true);
    this.playerService.currentMusic = { playlist, songs, song }
  }

  get isPlayingPlaylist(): boolean {
    return this.playerService.isPlaying && this.playerService.currentMusic.playlist?.id === this.id;
  }

}
