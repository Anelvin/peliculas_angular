import { Component, OnInit } from '@angular/core';
import {SeriesService} from '../services/series.service';

@Component({
  selector: 'app-series-mejor-calificadas',
  templateUrl: './series-mejor-calificadas.component.html',
  styleUrls: ['./series-mejor-calificadas.component.scss']
})
export class SeriesMejorCalificadasComponent implements OnInit {

  public series:object;
  public loading=false;
  public generos=[];
  public pagina=1;
  public generosFiltrado;
  public queryGeneros='';
  public queryFiltrado='';
  public url_imagen = 'https://image.tmdb.org/t/p/w200/';
  constructor(public seriesservice:SeriesService) { }

  ngOnInit() {
    this.loading=false;
    this.seriesservice.buscarMejorCalificadas(this.pagina,this.queryFiltrado)
    .subscribe(resultado=>{
      this.series=resultado['results']
    })
    this.loading=true;
  }

  paginaSiguiente() {
    this.loading=false;
    this.seriesservice.buscarMejorCalificadas(++this.pagina + '',this.queryFiltrado)
      .subscribe(
        resultado => {
         this.series = resultado['results'];
         this.loading=true
        })
        console.log(this.queryFiltrado);
  }

  paginaAnterior(){
    if(this.pagina>1){
      this.seriesservice.buscarMejorCalificadas(--this.pagina + '',this.queryFiltrado)
      .subscribe(
        resultado => {
         this.series = resultado['results'];
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
    this.seriesservice.seriesPopulares(this.pagina,this.queryFiltrado)
    .subscribe(resultado=>{
      this.series=resultado['results']
    })
    
  }

}
