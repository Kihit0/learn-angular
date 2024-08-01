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
  authService = inject(AuthService);

  form = new FormGroup({
    username: new FormControl<null | string>(null, Validators.required),
    password: new FormControl<null | string>(null, Validators.required),
  });

  onSubmit() {
    if (this.form.valid) {
      //@ts-ignore
      this.authService.login(this.form.value).subscribe((s) => {
        console.log(s);
      });
    }
  }
}
