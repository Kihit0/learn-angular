import { Component, inject, signal } from '@angular/core';
import { LogoComponent } from '../../ux/logo/logo.component';
import { ButtonComponent } from '../../ui/button/button.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { IconsComponent } from '../../ux/icons/icons.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LogoComponent,
    ButtonComponent,
    ReactiveFormsModule,
    IconsComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private _authService = inject(AuthService);
  private _router = inject(Router);

  isPasswordShow = signal<boolean>(false);

  form = new FormGroup({
    username: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required),
  });

  getIsValid(formItem: 'username' | 'password') {
    const value = this.form.controls[`${formItem}`];
    const isValid = value.invalid && (value.dirty || value.touched);

    return isValid;
  }

  onSubmit() {
    if (this.form.valid) {
      //@ts-ignore
      this._authService.login(this.form.value).subscribe((res) => {
        this._router.navigate(['']);
      });
    }
  }
}
