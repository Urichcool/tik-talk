import { Component, inject, OnInit } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { CommonModule, NgFor } from '@angular/common';
import { SubscriberCardComponent } from './subscriber-card/subscriber-card.component';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../data/services/profile.service';
import { firstValueFrom } from 'rxjs';
import { ImgUrlPipe } from '../../helpers/pipes/img-url.pipe';

@Component({
  selector: 'app-sidebar',
  imports: [SvgIconComponent, NgFor, SubscriberCardComponent, RouterLink, CommonModule, ImgUrlPipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  profileService = inject(ProfileService);

  subscribers$ = this.profileService.getSubscribersShortList();

  me = this.profileService.me

  menuItems: { label: string; icon: string; link: string }[] = [
    { label: 'My page', icon: 'home', link: 'profile/me' },
    { label: 'Chats', icon: 'chats', link: 'chats' },
    { label: 'Search', icon: 'search', link: 'search' },
  ];

  ngOnInit(): void {
    firstValueFrom(this.profileService.getMe()) 
  }
}
