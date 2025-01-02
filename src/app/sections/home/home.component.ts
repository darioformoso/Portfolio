import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  public url =
    'https://drive.google.com/file/d/1iZFgYhcCeymNXnTEVO4erfl_K7c_NHID/view?usp=sharing';

  public onClick(): void {
    window.open(this.url, '_blank');
  }
}
