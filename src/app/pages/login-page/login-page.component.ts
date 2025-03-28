import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  authService = inject(AuthService);
  router = inject(Router);

  isPaswordVisible = signal<boolean>(false)

  coockiService = inject(CookieService);

  form: FormGroup<{
    username: FormControl<string | null>;
    password: FormControl<string | null>;
  }> = new FormGroup({
    username: new FormControl<string | null>('', Validators.required),
    password: new FormControl<string | null>('', Validators.required),
  });

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value as {
        username: string;
        password: string;
      };
      this.authService.login(formData).subscribe((res) => {
        this.router.navigate(['']);
      });
    }
  }
}
