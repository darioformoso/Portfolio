import { Component } from '@angular/core';

export const NAV_ITEMS: Array<{
  key: string;
  label: string;
}> = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'projects', label: 'Projects' },
  { key: 'contactMe', label: 'Contact Me' },
];
@Component({
  selector: 'top-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss'],
})
export class TopNavigationComponent {
  protected navItems = NAV_ITEMS;
  constructor() {}
}
