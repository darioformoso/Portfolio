import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  public url =
    'https://drive.google.com/file/d/1iZFgYhcCeymNXnTEVO4erfl_K7c_NHID/view?usp=sharing';
  constructor() {}

  public ngOnInit() {}

  public onClick(): void {
    window.open(this.url, '_blank');
  }
}
