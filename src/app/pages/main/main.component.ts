import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ProfileService } from '../../data/services/profile/profile.service';
import { SidebarComponent } from '../../ux/sidebar/sidebar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  private _profile = inject(ProfileService);
  private _router = inject(Router);

  constructor() {
    this._profile.getMe.subscribe((val) => console.log(val));
    this._router.navigate(['/search']);
  }
}
