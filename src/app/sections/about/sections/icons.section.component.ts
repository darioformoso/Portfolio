import { Component, Input, OnInit } from '@angular/core';
import { LanguageCardTypes } from '../about.component';

@Component({
  selector: 'icons-section',
  templateUrl: 'icons.section.component.html',
  styleUrls: ['icons.section.component.scss'],
})
export class IconsSectionComponent implements OnInit {
  @Input({ required: true }) public name?: string;
  @Input({ required: true }) public icons?: LanguageCardTypes;

  constructor() {}

  public ngOnInit() {}
}
