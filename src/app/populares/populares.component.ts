import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service'

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrls: ['./populares.component.scss']
})
export class PopularesComponent implements OnInit {
  public peliculas: object;
  public pagina = 1;
  public generos=[];
  public generosFiltrado;
  public queryGeneros=''
  public url_imagen = 'https://image.tmdb.org/t/p/w200/'
  constructor(public peliculasservice: PeliculasService) { }

  ngOnInit() {
    this.peliculasservice.buscarPeliculasPopulares(this.pagina + '')
      .subscribe(resultado => this.peliculas = resultado['results']), () => {
        console.log(this.peliculas);
      };
  }

  paginaSiguiente() {
    this.peliculasservice.buscarPeliculasPopulares(++this.pagina + '')
      .subscribe(
        resultado => this.peliculas = resultado['results'],
        error => console.log(error))
  }

  paginaAnterior(){
    if(this.pagina>1){
      this.peliculasservice.buscarPeliculasPopulares(--this.pagina + '')
      .subscribe(
        resultado => this.peliculas = resultado['results'],
        error => console.log(error))
    }
  }
  

  imprimir() {
    console.log(this.peliculas);
  }
  filtroGeneros(t){
    this.generos.push(t);
    this.queryGeneros='&width_genres=';
    for(let x=0;x<this.generos.length;x++){

    }
    for(let x=0;x<this.generos.length;x++){
      this.queryGeneros += `${this.generos[x]},`
    }
    console.log(this.queryGeneros);
  }

}
