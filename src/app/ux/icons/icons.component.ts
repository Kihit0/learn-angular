import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconPassword } from './icon/icon-password.component';
import { IconTelegram } from './icon/icon-telegram.component';

@NgModule({
  declarations: [IconPassword, IconTelegram],
  imports: [CommonModule],
  exports: [IconPassword, IconTelegram],
})
export class IconsComponent {}
