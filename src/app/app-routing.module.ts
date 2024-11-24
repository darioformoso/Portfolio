import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { NotFoundComponent } from './sections/not-found/not-found.component';
import { AboutComponent } from './sections/about/about.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactMeComponent } from './sections/contactMe/contact-me.component';
import { NAV_ITEMS } from './components/navigation/navigation.component';

const routes: Routes = [
  { path: NAV_ITEMS[0].key, component: HomeComponent }, //Home
  { path: NAV_ITEMS[1].key, component: AboutComponent }, // About
  { path: NAV_ITEMS[2].key, component: ProjectsComponent }, // Projects
  { path: NAV_ITEMS[3].key, component: ContactMeComponent }, // Contact Me

  { path: '', redirectTo: NAV_ITEMS[0].key, pathMatch: 'full' }, // Redirects to home
  { path: '**', component: NotFoundComponent }, // Wild Route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
