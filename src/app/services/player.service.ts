import { Injectable, computed, signal } from '@angular/core';
import { Playlist, Song } from '../interfaces/playlistData.interface';

interface CurrentMusic {
  playlist?: Playlist,
  songs?: Song[]
  song?: Song,
}

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private _isPlaying = signal(false);

  private _currentMusic = signal<CurrentMusic>({songs: []});

  private _volume = signal(1);

  public get isPlaying(): boolean {
    return this._isPlaying();
  }
  public setIsPlaying(value: boolean) {
    this._isPlaying.set(value);    
  }

  public get currentMusic() {
    return this._currentMusic();
  }
  public setCurrentMusic(value: CurrentMusic) {
    this._currentMusic.set(value);
  }
  public nextSong(): void {
    const nextSong = this.currentMusic;
    const index = nextSong.songs?.indexOf(nextSong.song!);
    if (this.hasNextSong()) {
      nextSong.song = nextSong.songs![index! + 1];
      const { playlist, song, songs } = nextSong;
      this._currentMusic.set({ playlist, song, songs });
    }
  }
  public previousSong(): boolean {
    const nextSong = this.currentMusic;
    const index = nextSong.songs?.indexOf(nextSong.song!);
    if (this.hasPreviousSong()) {
      nextSong.song = nextSong.songs![index! - 1];
      const { playlist, song, songs } = nextSong;
      this._currentMusic.set({ playlist, song, songs });
      return true;
    }
    return false;
  }
  hasNextSong(): boolean {
    if (!this.currentMusic.songs || !this.currentMusic.song) {
      return false;
    }
    const lengthSongs = this.currentMusic.songs.length;
    const nextSong = this.currentMusic;
    const index = nextSong.songs?.indexOf(nextSong.song!);
    if (this.currentMusic.song.id < lengthSongs) {
      return true;
    }
    return false;
  }
  hasPreviousSong(): boolean {
    if (!this.currentMusic.songs || !this.currentMusic.song) {
      return false;
    }
    const nextSong = this.currentMusic;
    const index = nextSong.songs?.indexOf(nextSong.song!);
    if (this.currentMusic.song.id > 1) {
      return true;
    }
    return false;
  }


  public get volume() {
    return this._volume();
  }
  public setVolume(value: number) {
    this._volume.set(value);
  }
}
