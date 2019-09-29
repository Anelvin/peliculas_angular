import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {PeliculasService} from '../services/peliculas.service';

@Component({
  selector: 'app-generos-peliculas',
  templateUrl: './generos-peliculas.component.html',
  styleUrls: ['./generos-peliculas.component.scss']
})
export class GenerosPeliculasComponent implements OnInit {
  @Output() obtenerGeneros=new EventEmitter();
  public generos:object;
  constructor(public peliculasservice:PeliculasService) { }

  ngOnInit() {
    this.peliculasservice.buscarGenerosPeliculas()
    .subscribe(resultado=>this.generos=resultado['genres'])
  }

  filtrarGeneros(event){
    this.obtenerGeneros.emit(event.target.id);
  }

}
