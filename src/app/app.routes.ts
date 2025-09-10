import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Projects } from './Components/projects/projects';
import { Contact } from './Components/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'projects',
    component: Projects,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
