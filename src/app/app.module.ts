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
import { SeoService } from './services/seo.service';
import { RecaptchaModule } from 'ng-recaptcha';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/index/index.module').then(m => m.IndexModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule)
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
    RecaptchaModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: './' },
    SeoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
