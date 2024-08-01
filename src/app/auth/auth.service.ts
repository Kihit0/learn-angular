import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASE_URL } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _http = inject(HttpClient);
  private _endpoint = `${BASE_URL}auth`;

  login(payload: { username: string; password: string }) {
    const fd = new FormData();

    fd.append('username', payload.username);
    fd.append('password', payload.password);

    return this._http.post(`${this._endpoint}/token`, fd);
  }
}
