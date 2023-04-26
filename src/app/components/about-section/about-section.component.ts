import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent {
  loaded: boolean = false;

  lazyLoad(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = '../../../../assets/images/me-with-computer.webp';
    this.loaded = true;
  }
}
