import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Playlist, Song, allPlaylists, songs } from 'src/app/interfaces/playlistData.interface';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styles: ``
})
export class PlaylistComponent implements OnInit {

  // TODO: VALIDAR SI NO HAY UN ID EN UN FUTURO
  playerService = inject(PlayerService);

  playlist!: Playlist;
  playlistSongs: Song[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id: string | null; 
    this.route.paramMap.subscribe((params: ParamMap) => {
      id = params.get('id');
      if (id) {
        this.playlist = this.playerService.findPlaylist(+id);
        this.playlistSongs = this.playerService.findPlaylistSongs(this.playlist.albumId);
      }
    });

  }

}
