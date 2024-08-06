import { Component, inject, Injector } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';
import { IconHome } from '../icons/icon/icon-home.component';
import { IconChat } from '../icons/icon/icon-chat.component';
import { IconSearch } from '../icons/icon/icon-search.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, LogoComponent, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  private _router = inject(Router);
  private _injector = inject(Injector);
  data = [
    {
      icon: IconHome,
      url: '/profile',
      text: 'Моя страница',
    },
    {
      icon: IconChat,
      url: '/chats',
      text: 'Чаты',
    },
    {
      icon: IconSearch,
      url: '/search',
      text: 'Поиск',
    },
  ];

  get activeUrl() {
    return this._router.url;
  }

  getInjectorItem(item: any): Injector {
    return Injector.create({
      providers: [
        {
          provide: 'color',
          useValue: this.activeUrl === item.url && 'var(--color-heliotrope)',
        },
      ],
      parent: this._injector,
    });
  }
}
