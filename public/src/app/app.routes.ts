import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EditorComponent } from './components/editor/editor.component';
import { NavComponent } from './components/nav/nav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { AdministrarUsuarioComponent } from './components/administrar-usuario/administrar-usuario.component';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { NavUsuarioComponent } from './components/nav-usuario/nav-usuario.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { EditorOficialComponent } from './components/editor-oficial/editor-oficial.component';


const APP_ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component : HomeComponent},
    {path: 'editor', component : EditorComponent},
    {path: 'nav', component:NavComponent},
    {path: 'crear-usuario', component:CrearUsuarioComponent},
    {path: 'navp', component:NavbarComponent}, //solo de prueba para componentes
    {path: 'dashboard', component:DashboardComponent},
    {path: 'admin-usuario', component: AdministrarUsuarioComponent},
    {path: 'nav-usuario', component: NavUsuarioComponent},
    {path: 'iniciar-sesion', component: IniciarSesionComponent},
    {path: 'editor-oficial', component: EditorOficialComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'},
    {path: ' ', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports:[
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]

})

export class AppRoutingModule { }

//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES); APP_ROUTING,

