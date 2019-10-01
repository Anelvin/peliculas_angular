import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-generos-peliculas',
  templateUrl: './generos-peliculas.component.html',
  styleUrls: ['./generos-peliculas.component.scss']
})
export class GenerosPeliculasComponent implements OnInit {
  @Output() obtenerGeneros = new EventEmitter();
  public generos: Array<{
    id: number;
    name: string;
    checked: boolean;
  }>;
  constructor(public peliculasservice: PeliculasService) { }

  ngOnInit() {
    this.peliculasservice.buscarGenerosPeliculas()
      .subscribe(resultado => {
        this.generos = resultado['genres']
        this.generos[1].checked = true;
        this.generos[4].checked = true;
       
      })
  }



  toggleCheck(event) {
    let id = Number(event.target.value)

    this.generos = this.generos.map( gen =>  {
      if (gen.id === id) {
        gen.checked = !gen.checked
      }
      return gen

    })

    const checked = this.generos.filter( gen => gen.checked).map(gen => gen.id).join(',')


    this.obtenerGeneros.emit(checked);
  }

}
