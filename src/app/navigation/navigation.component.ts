import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss']
})

export class TopNavigationComponent implements OnInit {

  protected navItems: Array<{ key: string, label: string }> = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'portfolio', label: 'Portfolio' },
    { key: 'contactMe', label: 'Contact Me' },
  ];
  constructor() { }

  public ngOnInit() { }
}
