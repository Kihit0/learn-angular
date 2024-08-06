import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-icon-home',
  template: `<svg
    width="14"
    height="12"
    viewBox="0 0 14 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.65625 11.3438H2.34375V6H0.34375L7 0L13.6562 6H11.6562V11.3438H8.34375V7.34375H5.65625V11.3438Z"
      [attr.fill]="color"
    />
  </svg> `,
})
export class IconHome {
  @Input() color: string = 'var(--color-white)';

  constructor(@Inject('color') private injectedColor: string) {}

  ngOnInit() {
    if (this.injectedColor) {
      this.color = this.injectedColor;
    }
  }
}
