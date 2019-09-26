import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(public http:HttpClient) { }

  buscarPeliculasPopulares(page:string,generos){
    if(generos.length > 12){
      return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&page=${page}${generos}`)
    }else{
      return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&page=${page}`);
    }
  }
  peliculasPopularesGeneros(page,generos){
    if(generos.length > 12){
      return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&page=${page}${generos}`)
    }else{
      return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&page=${page}`);
    }
  }
  buscarPeliculasEnCine(pagina,generos){
    if(generos.length > 12){
      return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US&page=${pagina}${generos}`)
    }else{
      return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US&page=${pagina}`)
    }
  }
  buscarPeliculaDetalle(id){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US
    `)
  }
  buscarGenerosPeliculas(){
    return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US`)
  }
}
