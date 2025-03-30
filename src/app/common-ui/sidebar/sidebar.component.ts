import { Component, inject } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { CommonModule, NgFor } from '@angular/common';
import { SubscriberCardComponent } from './subscriber-card/subscriber-card.component';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../data/services/profile.service';

@Component({
  selector: 'app-sidebar',
  imports: [SvgIconComponent, NgFor, SubscriberCardComponent, RouterLink, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  profileService = inject(ProfileService);

  subscribers$ = this.profileService.getSubscribersShortList();

  menuItems: { label: string; icon: string; link: string }[] = [
    { label: 'My page', icon: 'home', link: '' },
    { label: 'Chats', icon: 'chats', link: 'chats' },
    { label: 'Search', icon: 'search', link: 'search' },
  ];
}
