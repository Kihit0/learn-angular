import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { canActiveAuth } from './auth/auth.guard';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainComponent,
    canActivate: [canActiveAuth],
    children: [
      {
        path: 'search',
        component: SearchComponent,
      },
    ],
  },
];
