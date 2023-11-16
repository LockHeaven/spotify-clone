import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Playlist, Song, allPlaylists, songs } from 'src/app/interfaces/playlistData.interface';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styles: ``
})
export class PlaylistComponent implements OnInit {

  // TODO: VALIDAR SI NO HAY UN ID EN UN FUTURO

  playlist!: Playlist;
  playlistSongs: Song[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id: string | null; 
    this.route.paramMap.subscribe((params: ParamMap) => {
      id = params.get('id');
      this.playlist = allPlaylists.find(playlist => playlist.id === id)!;
      this.playlistSongs = songs.filter(song => song.albumId === this.playlist.albumId);
    });

  }

}
