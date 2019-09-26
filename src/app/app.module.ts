import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EncineComponent } from './encine/encine.component';
import { PopularesComponent } from './populares/populares.component';
import { PeliculaDetalleComponent } from './pelicula-detalle/pelicula-detalle.component';
import { GenerosPeliculasComponent } from './generos-peliculas/generos-peliculas.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EncineComponent,
    PopularesComponent,
    PeliculaDetalleComponent,
    GenerosPeliculasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
