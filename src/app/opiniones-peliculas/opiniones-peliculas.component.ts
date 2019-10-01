import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../services/peliculas.service';
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-opiniones-peliculas',
  templateUrl: './opiniones-peliculas.component.html',
  styleUrls: ['./opiniones-peliculas.component.scss']
})
export class OpinionesPeliculasComponent implements OnInit {
  public loading=false;
  public id=null;
  public opiniones:object;
  constructor(public peliculasservice:PeliculasService,public _router:ActivatedRoute) { }

  ngOnInit() {
    this.loading=false;
    this.id=this._router.snapshot.paramMap.get('id')
    this.peliculasservice.opinionesPeliculas(this.id)
    .subscribe(resultado=>{
      this.opiniones=resultado['results']
    })
    this.loading=true;
  }

  

}
