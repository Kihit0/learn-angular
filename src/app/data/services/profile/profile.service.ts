import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASE_URL } from '../../../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private _http = inject(HttpClient);
  private _endpoint = `${BASE_URL}account`;

  constructor() {}

  get getMe() {
    return this._http.get(`${this._endpoint}/me`);
  }
}
