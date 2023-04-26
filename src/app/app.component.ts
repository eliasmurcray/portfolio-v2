import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { SeoService } from './services/seo.service';
import { seoSitemap } from './seo-sitemap';
import { RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'portfolio';
  sub = this.router.events.subscribe((event: Event) => {
    if (event instanceof NavigationEnd) {
      this.setMetaTags(event);
    }
  });

  constructor(private router: Router, private metatagsService: SeoService) {}

  ngOnDestroy() {
    this.sub && this.sub.unsubscribe();
  }

  private setMetaTags(event: Event) {
    const item = seoSitemap.find((i) => (event as RouterEvent).url === i.customUrl);
      if (item) {
        if (item.title) this.metatagsService.updateTitle(item.title);

        this.metatagsService.updateTags([
          item.description ? { name: 'description', content: item.description } : null
        ]);
        this.metatagsService.updateTag({ property: 'og:url', content: window.location.href });
      }
  }
}
