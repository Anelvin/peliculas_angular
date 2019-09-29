import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(public _router:Router) { }
  tema='Seleccione...';
  tipoPeliculas='Seleccione...';
  tipoPersonas='Seleccione...';
  tipoSeries='Seleccione...';

  ngOnInit() {
  }

  cambiarTema(){
    if(this.tema==='peliculas'){
      this._router.navigate(['/peliculas/populares']);
      this.tipoPeliculas='populares';
    }
    if(this.tema==='personas'){
      this._router.navigate(['/personas/populares']);
      this.tipoPersonas='populares'
    }
    if(this.tema==='series'){
      this._router.navigate(['/series/populares']);
      this.tipoSeries='populares'
    }
  }

  cambiarTipoPelicula(){
    console.log(this.tipoPeliculas);
    if(this.tema==='peliculas'){
      switch(this.tipoPeliculas){
        case 'populares':this._router.navigate(['/peliculas/populares']);
                        break;
        case 'encines':this._router.navigate(['/peliculas/encine']);
                        break;
        case 'mejorcalificadas':this._router.navigate(['/peliculas/mejorcalificadas']);
                        break;
        default:this._router.navigate(['/peliculas/populares']);
      }
    }
    if(this.tema==='personas'){
      
    }
    if(this.tema==='series'){
      console.log(this.tema);
      switch(this.tipoSeries){
        case 'populares':this._router.navigate(['/series/populares']);
                        break;
        default:this._router.navigate(['/series/populares']);
      }
    }
  }

}
