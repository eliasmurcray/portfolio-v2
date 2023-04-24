import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LinksComponent } from './components/links/links.component';
import { IndexComponent } from './components/index/index.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsSectionComponent } from './components/skills-section/skills-section.component';
import { APP_BASE_HREF } from '@angular/common';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinksComponent,
    IndexComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ContactComponent,
    FooterComponent,
    SkillsSectionComponent,
    ProjectsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ { provide: APP_BASE_HREF, useValue: './' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
