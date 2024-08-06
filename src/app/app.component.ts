import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconsComponent } from './ux/icons/icons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IconsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
