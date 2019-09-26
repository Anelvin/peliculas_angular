import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../services/peliculas.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public tendenciasPeliculas:object;
  public tendenciasTv:object;
  public tendenciasPersonas:object;
  public url_imagen='https://image.tmdb.org/t/p/w200/'
  constructor(public peliculasservice:PeliculasService) { }

  ngOnInit() {
    this.peliculasservice.tendenciasPeliculas()
    .subscribe(resultado=>{
      this.tendenciasPeliculas=resultado['results'];
    });
    this.peliculasservice.buscarTv()
    .subscribe(resultado=>{
      this.tendenciasTv=resultado['results'];
    });
    this.peliculasservice.buscarPersona()
    .subscribe(resultado=>{
      this.tendenciasPersonas=resultado['results']
    })
  }

}
