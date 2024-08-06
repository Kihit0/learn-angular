import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconPassword } from './icon/icon-password.component';
import { IconTelegram } from './icon/icon-telegram.component';
import { IconHome } from './icon/icon-home.component';
import { IconChat } from './icon/icon-chat.component';
import { IconSearch } from './icon/icon-search.component';

@NgModule({
  declarations: [IconPassword, IconTelegram, IconHome, IconChat, IconSearch],
  imports: [CommonModule],
  exports: [IconPassword, IconTelegram, IconHome, IconChat, IconSearch],
})
export class IconsComponent {}
