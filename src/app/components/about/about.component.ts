import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  isLoaded: boolean = false;

  lazyLoad(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = '../../../assets/images/me-in-hoodie.webp';
    this.isLoaded = true;
  }
}
