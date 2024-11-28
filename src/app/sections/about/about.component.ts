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
    {
      name: 'Angular',
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
    },
    {
      name: 'HTML',
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    },
    {
      name: 'TypeScript',
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    },
    {
      name: 'Scss',
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg',
    },
    {
      name: 'Css',
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    },
    {
      name: 'JavaScript',
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    },
    {
      name: 'React',
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
    {
      name: 'Postman',
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
    },
    {
      name: 'MongoDB',
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'aws',
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    },
  ];
  constructor() {}

  public ngOnInit() {}
}
