import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-link',
  templateUrl: 'home-link.component.html',
  styleUrl: 'home-link.component.scss',
})
export class HomeLinkComponent {
  @Input({ required: true }) public icon!: string;
  @Input({ required: true }) public link!: string;

  public onClicked(): void {
    window.open(this.link, '_blank');
  }
}
