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
import { ActorDetalleComponent } from './actor-detalle/actor-detalle.component';
import { HomeComponent } from './home/home.component';
import { CompanyDetalleComponent } from './company-detalle/company-detalle.component';
import { PeliculasSimilaresComponent } from './peliculas-similares/peliculas-similares.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EncineComponent,
    PopularesComponent,
    PeliculaDetalleComponent,
    GenerosPeliculasComponent,
    LoadingComponent,
    ActorDetalleComponent,
    HomeComponent,
    CompanyDetalleComponent,
    PeliculasSimilaresComponent
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
