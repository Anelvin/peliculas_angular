import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service'
@Component({
  selector: 'app-encine',
  templateUrl: './encine.component.html',
  styleUrls: ['./encine.component.scss']
})
export class EncineComponent implements OnInit {
  public pagina=1;
  public url_imagen = 'https://image.tmdb.org/t/p/w200/'
  public peliculas:object;
  constructor(public peliculasservice:PeliculasService) { }

  ngOnInit() {
    this.peliculasservice.buscarPeliculasEnCine(this.pagina)
    .subscribe(resultado=>this.peliculas=resultado['results'])
  }

  paginaSiguiente(){
    this.peliculasservice.buscarPeliculasEnCine(++this.pagina)
    .subscribe(resultado=>this.peliculas=resultado['results'])
  }

  paginaAnterior(){
    if(this.pagina>1){
      this.peliculasservice.buscarPeliculasEnCine(--this.pagina)
    .subscribe(resultado=>this.peliculas=resultado['results'])
    }
  }

}
