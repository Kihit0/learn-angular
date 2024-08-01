import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  @Input() color: string = 'var(--color-white)';
  @Input() size: { width: string; height: string } = {
    width: '17px',
    height: '74px',
  };
}
