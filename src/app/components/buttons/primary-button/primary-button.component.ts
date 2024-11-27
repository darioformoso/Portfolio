import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'primary-button',
  templateUrl: 'primary-button.component.html',
  styleUrls: ['primary-button.component.scss'],
})
export class PrimaryButton implements OnInit {
  @Input() public alternativeText?: string;
  constructor() {}

  public ngOnInit() {}
}
