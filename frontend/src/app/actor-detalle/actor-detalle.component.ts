import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ActoresService} from '../services/actores.service'

@Component({
  selector: 'app-actor-detalle',
  templateUrl: './actor-detalle.component.html',
  styleUrls: ['./actor-detalle.component.scss']
})
export class ActorDetalleComponent implements OnInit {
  public id='';
  public loading=false;
  public url_imagen='https://image.tmdb.org/t/p/w200/';
  public actor:object;
  constructor(public _router:ActivatedRoute,public actorservice:ActoresService) { }

  ngOnInit() {
    this.loading=false;
    this.id=this._router.snapshot.paramMap.get('actor');
    this.actorservice.buscarActor(this.id)
    .subscribe(resultado=>{
      this.actor=resultado;
      this.loading=true
    });
  }

}
