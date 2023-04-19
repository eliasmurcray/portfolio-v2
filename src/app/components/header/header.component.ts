import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name: string = 'Elias Murcray';
  toggled: boolean = false;

  constructor(public router: Router) {}

  ngOnInit(): void {}

  toggle(event: Event) {
    const button = event.target as HTMLButtonElement;
    button.classList.toggle('toggled');
    this.toggled = !this.toggled;
  }
}
