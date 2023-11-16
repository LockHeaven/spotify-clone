import { Component, Input, OnChanges } from '@angular/core';
import { Playlist } from '../../interfaces/playlistData.interface';

@Component({
  selector: 'side-menu-card',
  templateUrl: './side-menu-card.component.html',
  styles: ''
})
export class SideMenuCardComponent implements OnChanges {
  @Input() playlistItem!: Playlist;
  artistsString: string = '';
  alt: string = '';

  ngOnChanges(): void {

    const { artists, title } = this.playlistItem;
    this.artistsString = artists.join(", ");
    this.alt = `Cover of ${title} by ${this.artistsString}`;

  };


}
