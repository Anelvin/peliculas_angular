import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service'
@Component({
  selector: 'app-encine',
  templateUrl: './encine.component.html',
  styleUrls: ['./encine.component.scss']
})
export class EncineComponent implements OnInit {
  public pagina=1;
  public generos=[];
  public queryGeneros='';
  public queryFiltrado='';
  public loading=false;
  public url_imagen = 'https://image.tmdb.org/t/p/w200/'
  public peliculas:object;
  constructor(public peliculasservice:PeliculasService) { }

  ngOnInit() {
    this.loading=false;
    this.peliculasservice.buscarPeliculasEnCine(this.pagina,this.queryFiltrado)
    .subscribe(resultado=>{
      this.peliculas=resultado['results'];
      this.loading=true
      }
    )
  }

  paginaSiguiente(){
    this.loading=false;
    this.peliculasservice.buscarPeliculasEnCine(++this.pagina,this.queryFiltrado)
    .subscribe(resultado=>{
      this.peliculas=resultado['results'];
      this.loading=true
      }
    )
  }

  paginaAnterior(){
    this.loading=false;
    if(this.pagina>1){
      this.peliculasservice.buscarPeliculasEnCine(--this.pagina,this.queryFiltrado)
      .subscribe(resultado=>{
        this.peliculas=resultado['results'];
        this.loading=true
        }
      )
    }
  }

  filtroGeneros(t){
    console.log(t);
    
   
    
    this.peliculasservice.buscarPeliculasEnCine(this.pagina,t)
    .subscribe(resultado=>{
      this.peliculas=resultado['results']
      }
    )
  }
}
