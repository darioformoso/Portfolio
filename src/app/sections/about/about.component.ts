import { Component } from '@angular/core';

export type LanguageCardType = {
  name: string;
  link: string;
};
export type LanguageCardTypes = LanguageCardType[];

@Component({
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.scss'],
})
export class AboutComponent {
  public frameworkIcons: LanguageCardTypes = [
    {
      name: 'Angular',
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
    },

    {
      name: 'React',
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    },
  ];

  protected languageIcons: LanguageCardTypes = [
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
  ];

  protected toolIcons: LanguageCardTypes = [
    {
      name: 'Figma',
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
    },
    {
      name: 'Github',
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
    },
    {
      name: 'SourceTree',
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sourcetree/sourcetree-original.svg',
    },
    {
      name: 'VScode',
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
    },
    {
      name: 'Postman',
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
    },
  ];

  protected otherIcons: LanguageCardTypes = [
    {
      name: 'MongoDB',
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    },

    {
      name: 'aws',
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    },

    {
      name: 'NodeJS',
      link: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
    },
  ];
}
