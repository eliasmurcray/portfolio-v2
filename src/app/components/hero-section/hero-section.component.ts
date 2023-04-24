import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  currentYear: number = new Date().getFullYear();

  constructor(public router: Router) {}

  navigateTo(path: string): void {
    this.router.navigateByUrl(path);
  }
}
