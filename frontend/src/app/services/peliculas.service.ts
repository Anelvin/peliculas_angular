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
  buscarActores(id){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921`)
  }
  buscarVideos(id){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US`)
  }
  tendenciasPeliculas(){
    return this.http.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921`)
  }
  buscarTv(){
    return this.http.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921
    `)
  }
  buscarPersona(){
    return this.http.get(`https://api.themoviedb.org/3/trending/person/day?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921
    `)
  }
  peliculasSimilares(id){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US&page=1
    `)
  }
  opinionesPeliculas(id){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US&page=1
    `)
  }
  peliculasMejorCalificadas(page,generos){
    if(generos.length>13){
      return this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US&page=${page}${generos}`)
    }else{
      return this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US&page=${page}`)
    }
  }
  buscarPelicula(query){
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=7a5ab1a16890bdb75e5ffef8bd2ce921&language=en-US&query=${query}&page=1&include_adult=false`)
   }
}
