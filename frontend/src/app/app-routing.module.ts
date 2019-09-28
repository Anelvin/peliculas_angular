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
import {PeliculasMejorCalificadaComponent} from './peliculas-mejor-calificada/peliculas-mejor-calificada.component'

const routes: Routes = [
{
  path:'',
  component:HomeComponent,
},
{
  path:'peliculas',
  component:HeaderComponent,
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
}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
