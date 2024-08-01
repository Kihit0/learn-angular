import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() customClass?: string;
  @Input() children!: string;
  @Input() type: string = 'button';
  @Input() onClick?: () => void;
}
