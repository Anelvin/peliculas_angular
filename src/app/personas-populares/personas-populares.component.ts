import { Component, OnInit } from '@angular/core';
import {ActoresService} from '../services/actores.service';

@Component({
  selector: 'app-personas-populares',
  templateUrl: './personas-populares.component.html',
  styleUrls: ['./personas-populares.component.scss']
})
export class PersonasPopularesComponent implements OnInit {
  public actores:object;
  public loading=false;
  public pagina=1;
  public url_imagen = 'https://image.tmdb.org/t/p/w200/';
  constructor(public actoresservice:ActoresService) { }

  ngOnInit() {
    this.loading=false;
    this.actoresservice.personasPopulares(this.pagina)
    .subscribe(resultado=>{
      this.actores=resultado['results']
    });
    this.loading=true;
  }

  paginaSiguiente() {
    this.loading=false;
    this.actoresservice.personasPopulares(++this.pagina)
      .subscribe(
        resultado => {
         this.actores = resultado['results'];
         this.loading=true
        })
  }

  paginaAnterior(){
    this.loading=false;
    if(this.pagina>1){
      this.actoresservice.personasPopulares(--this.pagina)
      .subscribe(
        resultado => {
         this.actores = resultado['results'];
         this.loading=true
        })
    }
  }
}
