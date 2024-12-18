import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'primary-button',
  templateUrl: 'primary-button.component.html',
  styleUrls: ['primary-button.component.scss'],
})
export class PrimaryButton implements OnInit {
  @Input() public alternativeText?: string;
  @Input() public height?: string;
  @Input() public width?: string;
  @Input() public loading = false;
  constructor() {}

  public ngOnInit() {}
}
