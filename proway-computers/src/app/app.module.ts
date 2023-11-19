import { NgModule } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { FooterComponent } from './footer/footer.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
//import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component';

import { BrowserModule } from '@angular/platform-browser';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';

import{MatSnackBarModule} from "@angular/material/snack-bar"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NaoEncontradaComponent
  ],
  imports: [

    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    //BrowserModule,
    FormsModule,
    //FontAwesomeModule,
    MatSnackBarModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
