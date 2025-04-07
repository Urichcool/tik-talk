import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';
import { Pagebale } from '../interfaces/pagebale.interface';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);
  baseApiUrl = 'https://icherniakov.ru/yt-course/';
  me = signal<Profile | null>(null);

  getAccount(id: string) {
    return this.http.get<Profile>(`${this.baseApiUrl}account/${id}`);
  }

  getSubscribersShortList(subsAmount: number = 3) {
    return this.http
      .get<Pagebale<Profile>>(`${this.baseApiUrl}account/subscribers/`)
      .pipe(map((res) => res.items.slice(0, subsAmount)));
  }

  patchProfile(profile: Partial<Profile>) {
    return this.http.patch<Profile>(`${this.baseApiUrl}account/me`, profile);
  }

  getTestAccounts() {
    return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`);
  }

  getMe() {
    return this.http
      .get<Profile>(`${this.baseApiUrl}account/me`)
      .pipe(tap((res) => this.me.set(res)));
  }

  uploadAvatar(file: File){
    const fd:FormData = new FormData;
    fd.append("image", file)
    return this.http.post<Profile>(`${this.baseApiUrl}account/upload_image`, fd);
  }
}
