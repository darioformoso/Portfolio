import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

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
export class TopNavigationComponent implements OnInit {
  protected navItems = NAV_ITEMS;
  protected currentUrl = '';
  constructor(private router: Router) {}

  public ngOnInit() {
    this.router.events.subscribe((event) => {
      // if (event instanceof NavigationStart) {
      //   // Navigation is starting... show a loading spinner perhaps?
      //   // blog on that here: ultimatecourses.com/blog/angular-loading-spinners-with-router-events
      // }
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
      // if (event instanceof NavigationError) {
      //   // something went wrong, log the error
      //     console.log(event.error);
      // }
    });
  }

  public checkUrl(currentUrl: string, itemUrl: string): boolean {
    const url = `/${itemUrl}`;
    if (url === currentUrl) return true;
    return false;
  }
}
