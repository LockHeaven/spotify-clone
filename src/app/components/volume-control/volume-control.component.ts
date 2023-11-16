import { Component, inject } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'volume-control',
  templateUrl: './volume-control.component.html',
  styles: ``
})
export class VolumeControlComponent {

  volume: number = 100;
  volumeAux: number = 100;

  playerService = inject(PlayerService);

  setMute(): void {
    if (this.isVolumeSilence) {
      this.volume = this.volumeAux;
      const volumeValue = this.volume / 100;
      this.playerService.setVolume(volumeValue);
    } else {
      this.volumeAux = this.volume;
      this.volume = 0
      this.playerService.setVolume(0);
    }
  }  

  onChangeVolume(volume: Event): void {
    const volumeValue = volume.target as HTMLInputElement;
    const newVolume = volumeValue.valueAsNumber / 100;
    this.playerService.setVolume(newVolume);
    this.volume = volumeValue.valueAsNumber;
  }

  get isVolumeSilence(): boolean {
    return this.volume < 0.1;
  }

}
