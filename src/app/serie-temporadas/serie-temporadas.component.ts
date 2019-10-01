import { Component, OnInit } from '@angular/core';
import {SeriesService} from '../services/series.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-serie-temporadas',
  templateUrl: './serie-temporadas.component.html',
  styleUrls: ['./serie-temporadas.component.scss']
})
export class SerieTemporadasComponent implements OnInit {
  public temporadas:object;
  public titulo=null;
  public id=null;
  public url_imagen = 'https://image.tmdb.org/t/p/w200/';
  constructor(public seriesservice:SeriesService,public _router:ActivatedRoute) { }

  ngOnInit() {
    this.id=this._router.snapshot.paramMap.get('id')
    this.seriesservice.buscarSerie(this.id)
    .subscribe(resultado=>{
      this.temporadas=resultado['seasons'];
      this.titulo=resultado['name'];
    })
  }

}
