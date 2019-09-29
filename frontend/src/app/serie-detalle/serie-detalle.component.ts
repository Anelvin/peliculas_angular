import { Component, OnInit } from '@angular/core';
import {SeriesService} from '../services/series.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-serie-detalle',
  templateUrl: './serie-detalle.component.html',
  styleUrls: ['./serie-detalle.component.scss']
})
export class SerieDetalleComponent implements OnInit {
  public serie:object;
  public id=null;
  public url_imagen = 'https://image.tmdb.org/t/p/w200/';
  constructor(public seriesservice:SeriesService,public _router:ActivatedRoute) { }

  ngOnInit() {
    this.id=this._router.snapshot.paramMap.get('id');
    this.seriesservice.buscarSerie(this.id)
    .subscribe(resultado=>{
      this.serie=resultado;
    })
    
  }

}
