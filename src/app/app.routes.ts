import { Routes } from '@angular/router';
import { Home } from './Components/home/home';

export const routes: Routes = [{
    path: '',
    component: Home
},
{
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
}

];
