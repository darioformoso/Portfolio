import { Component, Input } from '@angular/core';
import { ProjectInfo } from '../projects.component';

@Component({
  selector: 'project-card',
  templateUrl: 'project-card.component.html',
  styleUrls: ['project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input({ required: true }) public project?: ProjectInfo;
}
