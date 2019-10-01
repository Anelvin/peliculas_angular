import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../services/peliculas.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-peliculas-similares',
  templateUrl: './peliculas-similares.component.html',
  styleUrls: ['./peliculas-similares.component.scss']
})
export class PeliculasSimilaresComponent implements OnInit {
  public id=null;
  public peliculasSimilares:object;
  public loading=false;
  public url_imagen='https://image.tmdb.org/t/p/w200/'
  constructor(public peliculasservice:PeliculasService,public _router:ActivatedRoute) { }

  ngOnInit() {
    this.loading=false;
    this.id=this._router.snapshot.paramMap.get('id');
    this.peliculasservice.peliculasSimilares(this.id)
    .subscribe(resultado=>{
      this.peliculasSimilares=resultado['results']
    })
    this.loading=true;
  }

}
