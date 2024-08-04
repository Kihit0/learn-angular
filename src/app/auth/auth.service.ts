import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASE_URL } from '../constants/constants';
import { TokenResponse } from './auth.type';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _http = inject(HttpClient);
  private _router = inject(Router);
  private _cookieService = inject(CookieService);

  private _endpoint = `${BASE_URL}auth`;
  private _token: TokenResponse = {
    access_token: '',
    refresh_token: '',
  };

  get isAuth() {
    /*     if (!this._token.access_token) {
      this._token = {
        access_token: this._cookieService.get('token'),
        refresh_token: this._cookieService.get('refreshToken'),
      };
    } */

    return !!this._token.access_token;
  }

  login(payload: { username: string; password: string }) {
    const fd = new FormData();

    fd.append('username', payload.username);
    fd.append('password', payload.password);

    return this._http.post<TokenResponse>(`${this._endpoint}/token`, fd).pipe(
      tap((val) => {
        this._router.navigate(['']);
        this._token = val;

        this._cookieService.set('token', this._token.access_token);
        this._cookieService.set('refreshToken', this._token.refresh_token);
      })
    );
  }
}
