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
    const mobileNav = document.getElementById("mobile-nav") as HTMLDivElement;
    button.classList.toggle('toggled');
    this.toggled = !this.toggled;

    


    if(this.toggled) {
      mobileNav!.style.display = 'flex';
      mobileNav.classList.remove('hide');
    } else {
      const func = () => {
        mobileNav.removeEventListener('animationend', func);
        mobileNav.style.display = 'none';
        mobileNav.classList.remove('hide');
      };
      mobileNav.addEventListener('animationend', func);
      mobileNav.classList.add('hide');
    }
  }

  navigateTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
