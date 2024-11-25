import { Component, OnInit } from '@angular/core';

export type LanguageCardType = {
  name: string;
  link: string;
};

@Component({
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.scss'],
})
export class AboutComponent implements OnInit {
  public languageCards: Array<LanguageCardType> = [
    { name: 'TypeScript', link: '' },
    { name: 'Scss', link: '' },
    { name: 'Css', link: '' },
    { name: 'JavaScript', link: '' },
    { name: 'Angular', link: '' },
    { name: 'React', link: '' },
    { name: 'Mongo', link: '' },
  ];
  constructor() {}

  public ngOnInit() {}
}
