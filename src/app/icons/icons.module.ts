import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeIconComponent } from './home-icon/home-icon.component';
import { LibraryIconComponent } from './library-icon/library-icon.component';
import { PauseIconComponent } from './pause-icon/pause-icon.component';
import { PlayIconComponent } from './play-icon/play-icon.component';
import { SearchIconComponent } from './search-icon/search-icon.component';
import { TimeIconComponent } from './time-icon/time-icon.component';
import { VolumeIconComponent } from './volume-icon/volume-icon.component';
import { VolumeSilenceIconComponent } from './volume-silence-icon/volume-silence-icon.component';
import { NextIconComponent } from './next-icon/next-icon.component';
import { PreviousIconComponent } from './previous-icon/previous-icon.component';


const Icons = [
  HomeIconComponent,
  LibraryIconComponent, 
  PauseIconComponent,
  PlayIconComponent,
  SearchIconComponent,
  TimeIconComponent,
  VolumeIconComponent,
  VolumeSilenceIconComponent,
  NextIconComponent,
  PreviousIconComponent
]


@NgModule({
  declarations: [Icons],
  imports: [
    CommonModule
  ],
  exports: [Icons]
})
export class IconsModule { }
