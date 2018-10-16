import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule, MatListModule, MatGridListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; //probar si funciona arriba en angula rmaterial


import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditorComponent } from './components/editor/editor.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'; //cambiado
import { TableComponent } from './components/table/table.component';
import { InicialComponent } from './inicial/inicial.component';
import { NavComponent } from './components/nav/nav.component';

//Routes

import { APP_ROUTING } from './app.routes';

import { LayoutModule } from '@angular/cdk/layout';
import { FooterComponent } from './footer/footer.component';



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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTING,
    MatMenuModule,
    MatButtonModule, 
    MatIconModule, 
    MatCardModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatListModule, MatGridListModule, MatTableModule, MatPaginatorModule, MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
