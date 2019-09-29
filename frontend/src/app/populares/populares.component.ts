import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service'
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrls: ['./populares.component.scss']
})
export class PopularesComponent implements OnInit {
  public peliculas: object;
  public pagina = 1;
  public generos=[];
  public loading=false;
  public generosFiltrado;
  public queryGeneros='';
  public queryFiltrado='';
  public url_imagen = 'https://image.tmdb.org/t/p/w200/';
  constructor(public peliculasservice: PeliculasService) { }

  ngOnInit() {
    this.peliculasservice.buscarPeliculasPopulares(this.pagina + '',this.queryFiltrado)
      .subscribe(resultado =>{
        this.peliculas = resultado['results'];
        this.loading=true
      });
  }

  paginaSiguiente() {
    this.loading=false;
    this.peliculasservice.buscarPeliculasPopulares(++this.pagina + '',this.queryFiltrado)
      .subscribe(
        resultado => {
         this.peliculas = resultado['results'];
         this.loading=true
        })
  }

  paginaAnterior(){
    this.loading=false;
    if(this.pagina>1){
      this.peliculasservice.buscarPeliculasPopulares(--this.pagina + '',this.queryFiltrado)
      .subscribe(
        resultado => {
         this.peliculas = resultado['results'];
         this.loading=true
        })
    }
  }
  

  imprimir() {
    console.log(this.peliculas);
  }


  filtroGeneros(t){
    let existe=0;
    this.queryGeneros='&with_genres=';
    for(let x=0;x<this.generos.length;x++){
      if(this.generos[x]==t){
        existe++;
        this.generos.splice(x,1);
      }
    }
    if(existe==0){
      this.generos.push(t);
    }
    for(let x=0;x<this.generos.length;x++){
      this.queryGeneros += `${this.generos[x]},`
    }
    this.queryFiltrado=this.queryGeneros.substring(0, this.queryGeneros.length-1);
    this.peliculasservice.peliculasPopularesGeneros(this.pagina,this.queryFiltrado)
    .subscribe(
      resultado=>this.peliculas=resultado['results'],
    )
  }

}
