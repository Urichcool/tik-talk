import { Component } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [SvgIconComponent, NgFor],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  menuItems: { label: string; icon: string; link: string }[] = [
    { label: 'My page', icon: 'home', link: '' },
    { label: 'Chats', icon: 'chats', link: 'chats' },
    { label: 'Search', icon: 'search', link: 'search' },
  ];
}
