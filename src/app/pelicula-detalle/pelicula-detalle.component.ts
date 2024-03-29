import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PeliculasService} from '../services/peliculas.service'

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.scss']
})
export class PeliculaDetalleComponent implements OnInit {
  public id=null;
  public pelicula:object;
  public generos:object;
  public compa_product:object;
  public idiomas:object;
  public actores:object;
  public video:object;
  public loading=false;
  public url_imagen='https://image.tmdb.org/t/p/w200/';
  constructor(private _router:ActivatedRoute,public peliculaservice:PeliculasService) { }

  ngOnInit() {
    this.loading=false;
    this.id=this._router.snapshot.paramMap.get('id');
    this.peliculaservice.buscarPeliculaDetalle(this.id)
    .subscribe(resultado=>{
      this.pelicula=resultado;
      this.generos=resultado['genres'];
      this.compa_product=resultado['production_companies'];
      this.idiomas=resultado['spoken_languages']
    })
    this.peliculaservice.buscarActores(this.id)
    .subscribe(resultado=>{
      this.actores=resultado['cast']
    })
    this.peliculaservice.buscarVideos(this.id)
    .subscribe(resultado=>{
      this.video=resultado['results']
    })
    this.loading=true;
  }

}
