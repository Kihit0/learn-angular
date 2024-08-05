import { Component, inject } from '@angular/core';
import { ProfileService } from '../../data/services/profile/profile.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  private _profile = inject(ProfileService);

  constructor() {
    this._profile.getMe.subscribe((val) => console.log(val));
  }
}
