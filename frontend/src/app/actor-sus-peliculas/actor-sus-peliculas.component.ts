import { Component, OnInit } from '@angular/core';
import {ActoresService} from '../services/actores.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-actor-sus-peliculas',
  templateUrl: './actor-sus-peliculas.component.html',
  styleUrls: ['./actor-sus-peliculas.component.scss']
})
export class ActorSusPeliculasComponent implements OnInit {
  public peliculas:object;
  public id=null;
  public actor:object;
  public loading=false;
  public url_imagen='https://image.tmdb.org/t/p/w200/';
  constructor(public actoresservice:ActoresService, public _router:ActivatedRoute) { }

  ngOnInit() {
    this.loading=false;
    this.id=this._router.snapshot.paramMap.get('id');
    this.actoresservice.suspeliculas(this.id)
    .subscribe(resultado=>{
      this.peliculas=resultado['cast']
    })
    this.loading=true;
    this.actoresservice.buscarActor(this.id)
    .subscribe(resultado=>{
      this.actor=resultado;
    })
  }

}
