import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import {SeriesService} from '../services/series.service';

@Component({
  selector: 'app-generos-series',
  templateUrl: './generos-series.component.html',
  styleUrls: ['./generos-series.component.scss']
})
export class GenerosSeriesComponent implements OnInit {
  public generos:object;
  @Output() obtenerGeneros=new EventEmitter;
  constructor(public seriesservice:SeriesService) { }

  ngOnInit() {
    this.seriesservice.buscarGenerosSeries()
    .subscribe(resultado=>{
      this.generos=resultado['genres']
    })
  }

  filtrarGeneros(event){
    this.obtenerGeneros.emit(event.target.id);
  }

}
