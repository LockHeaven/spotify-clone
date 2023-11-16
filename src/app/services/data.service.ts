import { Injectable } from '@angular/core';
import { allPlaylists, songs as allSongs } from '../interfaces/playlistData.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  get(id: string) {

    const playlist = allPlaylists.find((playlist) => playlist.id === id);
    const songs = allSongs.filter(song => song.albumId === playlist?.albumId);

    return { playlist, songs }
  }

}
