import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './sections/home/home.component';
import { NotFoundComponent } from './sections/not-found/not-found.component';
import { AboutComponent } from './sections/about/about.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactMeComponent } from './sections/contactMe/contact-me.component';
import { LanguageCardComponent } from './components/language-card/language-card.component';
import { PrimaryButton } from './components/buttons/primary-button/primary-button.component';
import { IconsSectionComponent } from './sections/about/sections/icons.section.component';
import { ProjectCardComponent } from './sections/projects/project-card/project-card.component';
import { HomeLinkComponent } from './components/home-links/home-link.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    ProjectsComponent,
    ContactMeComponent,
    LanguageCardComponent,
    PrimaryButton,
    IconsSectionComponent,
    ProjectCardComponent,
    HomeLinkComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
