import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  constructor(public http:HttpClient) { }

  buscarPelicula(query){
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US&query=${query}&page=1&include_adult=false
    `)
  }
}
