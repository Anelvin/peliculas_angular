import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { EncineComponent } from './encine/encine.component';
import {PopularesComponent} from './populares/populares.component';
import {PeliculaDetalleComponent} from './pelicula-detalle/pelicula-detalle.component'

const routes: Routes = [
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
  path:'peliculas/:id',
  component:PeliculaDetalleComponent
}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
