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

  private _currentMusic = signal<CurrentMusic>({});

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
  public set currentMusic(value: CurrentMusic) {
    this._currentMusic.set(value);
  }

  public get volume() {
    return this._volume();
  }
  public setVolume(value: number) {
    this._volume.set(value);
  }
}
