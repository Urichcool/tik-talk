import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';
import { Pagebale } from '../interfaces/pagebale.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);

  baseApiUrl = 'https://icherniakov.ru/yt-course/';

  constructor() {}

  getSubscribersShortList(){
   return this.http.get<Pagebale<Profile>>(`${this.baseApiUrl}account/subscribers/`);
  }

  getTestAccounts() {
   return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`);
  }

  getMe(){
    return this.http.get<Profile>(`${this.baseApiUrl}account/me`)
  }
}
