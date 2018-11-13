import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { AppComponent } from './app.component';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule, MatListModule, MatGridListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';

//componentes
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditorComponent } from './components/editor/editor.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'; //cambiado
import { TableComponent } from './components/table/table.component';
import { InicialComponent } from './components/inicial/inicial.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { AdministrarUsuarioComponent } from './components/administrar-usuario/administrar-usuario.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { NavUsuarioComponent } from './components/nav-usuario/nav-usuario.component';


// Routes APP_ROUTING,
import {  AppRoutingModule } from './app.routes';

// Ace wrapper
import { AceEditorModule } from 'ng2-ace-editor';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { EditorOficialComponent } from './components/editor-oficial/editor-oficial.component';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    EditorComponent,
    NavComponent,
    DashboardComponent,
    TableComponent,
    InicialComponent,
    FooterComponent,
    CrearUsuarioComponent,
    AdministrarUsuarioComponent,
    TablaComponent,
    NavUsuarioComponent,
    IniciarSesionComponent,
    EditorOficialComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule, 
    MatIconModule, 
    MatTabsModule,
    MatCardModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatListModule, MatGridListModule, MatTableModule, MatPaginatorModule, MatSortModule,
    AceEditorModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
