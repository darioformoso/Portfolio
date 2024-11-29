import { Component } from '@angular/core';

export type ProjectInfo = {
  description: string;
  image: string;
  name: string;
  link: string;
};

export type ProjectsInfo = ProjectInfo[];

@Component({
  selector: 'projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.scss'],
})
export class ProjectsComponent {
  public projects: ProjectsInfo = [
    {
      description: 'test',
      image: 'https://unsplash.it/400/200',
      name: 'Project',
      link: '',
    },
    {
      description: 'test',
      image: 'https://unsplash.it/400/200',
      name: 'Project',
      link: '',
    },
    {
      description: 'test',
      image: 'https://unsplash.it/400/200',
      name: 'Project',
      link: '',
    },
    {
      description: 'test',
      image: 'https://unsplash.it/400/200',
      name: 'Project',
      link: '',
    },
  ];
}
