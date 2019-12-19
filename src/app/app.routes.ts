import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
// Rutas
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './login/register.component';


const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: '**', component: LoginComponent },
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });

