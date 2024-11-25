import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'language-card',
  templateUrl: 'language-card.component.html',
  styleUrls: ['language-card.component.scss'],
})
export class LanguageCardComponent implements OnInit {
  @Input() public name?: string;
  @Input() public link?: string;
  constructor() {}

  public ngOnInit() {}
}
