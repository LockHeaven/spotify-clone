import { Component, Input, OnChanges } from '@angular/core';
import { Playlist } from 'src/app/interfaces/playlistData.interface';

@Component({
  selector: 'playlist-item-card',
  templateUrl: './playlist-item-card.component.html',
  styles: ``
})
export class PlaylistItemCardComponent implements OnChanges {
  @Input() playlistItem!: Playlist;
  artistsString: string = '';
  alt: string = '';

  ngOnChanges(): void {

    const { artists, title } = this.playlistItem;
    this.artistsString = artists.join(", ");
    this.alt = `Cover of ${title} by ${this.artistsString}`;

  };
}
