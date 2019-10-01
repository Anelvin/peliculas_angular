import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { EncineComponent } from './encine/encine.component';
import {PopularesComponent} from './populares/populares.component';
import {PeliculaDetalleComponent} from './pelicula-detalle/pelicula-detalle.component'
import {ActorDetalleComponent} from './actor-detalle/actor-detalle.component';
import {HomeComponent} from './home/home.component';
import {CompanyDetalleComponent} from './company-detalle/company-detalle.component';
import {PeliculasSimilaresComponent} from './peliculas-similares/peliculas-similares.component';
import {OpinionesPeliculasComponent} from './opiniones-peliculas/opiniones-peliculas.component';
import {PeliculasMejorCalificadaComponent} from './peliculas-mejor-calificada/peliculas-mejor-calificada.component';
import {PersonasPopularesComponent} from './personas-populares/personas-populares.component';
import {ActorSusPeliculasComponent} from './actor-sus-peliculas/actor-sus-peliculas.component';
import {BusquedaComponent} from './busqueda/busqueda.component';
import {SeriesPopularesComponent} from './series-populares/series-populares.component';
import {SerieDetalleComponent} from './serie-detalle/serie-detalle.component';
import {SerieTemporadasComponent} from './serie-temporadas/serie-temporadas.component';
import {OpinionesSeriesComponent} from './opiniones-series/opiniones-series.component';
import {SeriesMejorCalificadasComponent} from './series-mejor-calificadas/series-mejor-calificadas.component';

const routes: Routes = [
{
  path:'',
  component:HomeComponent,
},
{
  path:'peliculas',
  redirectTo:'/peliculas/encine',
  pathMatch:'full'
},
{
  path:'peliculas/encine',
  component:EncineComponent,
},

{
  path:'peliculas/populares',
  component:PopularesComponent,
},
{
  path:'personas/populares',
  component:PersonasPopularesComponent
},
{
  path:'peliculas/mejorcalificadas',
  component:PeliculasMejorCalificadaComponent
},
{
  path:'peliculas/similares/:id',
  component:PeliculasSimilaresComponent
},
{
  path:'peliculas/opiniones/:id',
  component:OpinionesPeliculasComponent
},
{
  path:'peliculas/:id',
  component:PeliculaDetalleComponent
},
{
  path:'peliculas/company/:company',
  component:CompanyDetalleComponent
},
{
  path:'peliculas/:id/:actor',
  component: ActorDetalleComponent
},
{
  path:'peliculas/actor/:id',
  component: ActorDetalleComponent
},
{
  path:'peliculas/actor/:id/suspeliculas',
  component:ActorSusPeliculasComponent
},
{
  path:'series/populares',
  component:SeriesPopularesComponent
},
{
  path:'series/mejorcalificadas',
  component:SeriesMejorCalificadasComponent
},
{
  path:'series/:id',
  component:SerieDetalleComponent
},
{
  path:'series/opiniones/:id',
  component:OpinionesSeriesComponent
},
{
  path:'series/temporadas/:id',
  component:SerieTemporadasComponent
},
{
  path:'busqueda',
  component:BusquedaComponent
},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
