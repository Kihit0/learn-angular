import { Component, inject } from '@angular/core';
import { LogoComponent } from '../../ux/logo/logo.component';
import { ButtonComponent } from '../../ui/button/button.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LogoComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private _authService = inject(AuthService);
  isError = {
    username: false,
    password: false,
  };

  form = new FormGroup({
    username: new FormControl<null | string>(null, Validators.required),
    password: new FormControl<null | string>(null, Validators.required),
  });

  onSubmit() {
    if (this.form.valid) {
      //@ts-ignore
      this._authService.login(this.form.value);
    } else {
      this.isError.password = !this.form.value.password;
      this.isError.username = !this.form.value.username;
    }
  }
}
