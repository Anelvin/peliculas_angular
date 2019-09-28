import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../services/peliculas.service';

@Component({
  selector: 'app-peliculas-mejor-calificada',
  templateUrl: './peliculas-mejor-calificada.component.html',
  styleUrls: ['./peliculas-mejor-calificada.component.scss']
})
export class PeliculasMejorCalificadaComponent implements OnInit {
  mejorCalificada:object;
  loading=false;
  queryGeneros='';
  generos=[];
  queryFiltrado='';
  pagina=1;
  public url_imagen = 'https://image.tmdb.org/t/p/w200/';
  constructor(public peliculasservice:PeliculasService ) { }
  
  ngOnInit() {
    this.loading=false;
    this.peliculasservice.peliculasMejorCalificadas(this.pagina,this.queryFiltrado)
    .subscribe(resultado=>{
      this.mejorCalificada=resultado['results'];
    })
    this.loading=true;
  }
  paginaSiguiente() {
    this.loading=false;
    this.peliculasservice.peliculasMejorCalificadas(++this.pagina + '',this.queryFiltrado)
      .subscribe(
        resultado => {
         this.mejorCalificada = resultado['results'];
         this.loading=true
        })
  }

  paginaAnterior(){
    this.loading=false;
    if(this.pagina>1){
      this.peliculasservice.peliculasMejorCalificadas(--this.pagina + '',this.queryFiltrado)
      .subscribe(
        resultado => {
         this.mejorCalificada = resultado['results'];
         this.loading=true
        })
    }
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
    this.peliculasservice.peliculasMejorCalificadas(this.pagina,this.queryFiltrado)
    .subscribe(
      resultado=>this.mejorCalificada=resultado['results'],
    )
  }

}
