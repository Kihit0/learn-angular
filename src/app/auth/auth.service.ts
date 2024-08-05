import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASE_URL } from '../constants/constants';
import { TokenResponse } from './auth.type';
import { catchError, tap, throwError } from 'rxjs';
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

  private _saveTokens(res: TokenResponse) {
    this._router.navigate(['']);
    this._token = res;

    this._cookieService.set('token', this._token.access_token);
    this._cookieService.set('refreshToken', this._token.refresh_token);
  }

  get getToken() {
    return this._token;
  }

  get isAuth() {
    if (!this._token.access_token) {
      this._token = {
        access_token: this._cookieService.get('token'),
        refresh_token: this._cookieService.get('refreshToken'),
      };
    }

    return !!this._token.access_token;
  }

  login(payload: { username: string; password: string }) {
    const fd = new FormData();

    fd.append('username', payload.username);
    fd.append('password', payload.password);

    return this._http
      .post<TokenResponse>(`${this._endpoint}/token`, fd)
      .pipe(tap((val) => this._saveTokens(val)));
  }

  logout() {
    this._cookieService.deleteAll();
    this._token = {
      access_token: '',
      refresh_token: '',
    };

    this._router.navigate(['/login']);
  }

  refreshAuthToken() {
    return this._http
      .post<TokenResponse>(`${this._endpoint}/refresh`, {
        refresh_token: this._token.refresh_token,
      })
      .pipe(
        tap((val) => this._saveTokens(val)),
        catchError((err) => {
          this.logout();

          return throwError(err);
        })
      );
  }
}
