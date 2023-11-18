import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { IconsModule } from '../icons/icons.module';
import { SideMenuItemComponent } from './side-menu-item/side-menu-item.component';
import { SideMenuCardComponent } from './side-menu-card/side-menu-card.component';
import { PlaylistItemCardComponent } from './playlist-item-card/playlist-item-card.component';
import { GreetingComponent } from './greeting/greeting.component';
import { PlayerComponent } from './player/player.component';
import { CardPlayButtonComponent } from './card-play-button/card-play-button.component';
import { CurrentSongComponent } from './current-song/current-song.component';
import { VolumeControlComponent } from './volume-control/volume-control.component';
import { SongsTableComponent } from './songs-table/songs-table.component';
import { NavigationComponent } from './navigation/navigation.component';


const components = [
  AsideMenuComponent,
  SideMenuItemComponent,
  SideMenuCardComponent,
  PlaylistItemCardComponent,
  GreetingComponent,
  PlayerComponent,
  CardPlayButtonComponent,
  CurrentSongComponent,
  VolumeControlComponent,
  SongsTableComponent,
  NavigationComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule
  ],
  exports: [
    components
  ]
})
export class ComponentsModule { }
