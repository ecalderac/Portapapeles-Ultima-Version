import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';

const APP_ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'nav', component: NavComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'},
    {path: '', pathMatch: 'full', redirectTo: 'home'} //en caso de que la direccion esta vacia redireccionar a home
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

