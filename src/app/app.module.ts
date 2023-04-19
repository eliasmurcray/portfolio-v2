import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LinksComponent } from './components/links/links.component';
import { IndexComponent } from './components/index/index.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './components/skills/skills.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  {
    path: '/',
    component: IndexComponent
  },
  {
    path: '/contact',
    component: ContactComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinksComponent,
    IndexComponent,
    HeroComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ { provide: APP_BASE_HREF, useValue: './' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
