import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BusquedaService} from '../services/busqueda.service';
import { PeliculasService } from '../services/peliculas.service';
import {ActoresService} from '../services/actores.service'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  public tipoBusqueda='pelicula';
  public query=null;
  public resultadoBusqueda:object;
  public resultadoPersona:object;
  public peliculasActores:object;
  public url_imagen = 'https://image.tmdb.org/t/p/w200/';
  constructor(public busquedaservice:BusquedaService,public peliculaservice:PeliculasService,public actorservice:ActoresService) { }

  ngOnInit() {
  }

  buscarQuery(){
   if (this.tipoBusqueda==='pelicula'){
     this.busquedaservice.buscarPelicula(this.query)
     .subscribe(resultado=>{
       this.resultadoBusqueda=resultado['results']
     })
   }
   if (this.tipoBusqueda==='persona'){
    this.actorservice.buscarPersona(this.query)
    .subscribe(resultado=>{
      this.resultadoPersona=resultado['results']
    })
   }
   
  }


}
