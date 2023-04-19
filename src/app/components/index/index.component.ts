import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scrolled');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px', threshold: 0.2 });
  
    const targets = document.querySelectorAll('.js-scroll');
    targets.forEach((target) => {
      observer.observe(target);
    });
  }
}
