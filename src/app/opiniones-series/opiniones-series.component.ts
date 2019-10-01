import { Component, OnInit } from '@angular/core';
import {SeriesService} from '../services/series.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-opiniones-series',
  templateUrl: './opiniones-series.component.html',
  styleUrls: ['./opiniones-series.component.scss']
})
export class OpinionesSeriesComponent implements OnInit {
  public loading=false;
  public id=null;
  public comentarios=0;
  public opiniones:object;
  constructor(public seriesservice:SeriesService,public _router:ActivatedRoute) { }

  ngOnInit() {
    this.loading=false;
    this.id=this._router.snapshot.paramMap.get('id')
    this.seriesservice.buscarOpiniones(this.id)
    .subscribe(resultado=>{
      this.opiniones=resultado['results'];
      this.comentarios=resultado['results'].length;
    })
    this.loading=true;
  }
  ver(){
    console.log(this.opiniones);
  }
}
