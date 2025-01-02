import { Component, Input } from '@angular/core';

@Component({
  selector: 'primary-button',
  templateUrl: 'primary-button.component.html',
  styleUrls: ['primary-button.component.scss'],
})
export class PrimaryButton {
  @Input() public alternativeText?: string;
  @Input() public height?: string;
  @Input() public width?: string;
  @Input() public loading = false;
}
